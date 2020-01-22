"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const logger_1 = __importDefault(require("../../loaders/logger"));
const messages_1 = __importDefault(require("../../config/messages"));
const user_model_1 = require("../model/user_model");
const User = require('../../db/models').User;
const Role = require('../../db/models').Role;
exports.default = {
    create: async (email, password, status = 0, firstName = '', lastName = '', rut = 0, rutDv = '', role = 'default') => {
        let userDTO, msg = null;
        await User.findOne({ where: { email } })
            .then((user) => {
            if (user) {
                msg = messages_1.default.user["email.error.already"];
                userDTO = user_model_1.UserModel.toPlainObject(user);
            }
        }).catch((err) => {
            logger_1.default.error(err);
        });
        if (!userDTO) {
            let roleId = null;
            await Role.findOne({ where: { name: role } })
                .then((role) => {
                if (role) {
                    roleId = role.id;
                }
            }).catch((err) => {
                logger_1.default.error(err);
            });
            if (roleId) {
                let user = await User.create({
                    email,
                    password,
                    firstName,
                    lastName,
                    rut,
                    rutDv,
                    status,
                    roleId
                }).catch((err) => {
                    logger_1.default.error(err);
                });
                if (user) {
                    user = await User.findByPk(user.id, { include: ['role'] });
                    userDTO = user_model_1.UserModel.toPlainObject(user);
                }
                else {
                    msg = messages_1.default.user["general.create.error"];
                }
            }
            return {
                user: userDTO,
                msg,
                created: true,
            };
        }
        return {
            user: userDTO,
            msg,
            created: false,
        };
    },
    update: async (id, email, rut, rutDv, firstName, lastName) => {
        let success, error = null;
        const dataObject = { email, rut, rutDv, firstName, lastName };
        if ((!validator_1.default.isEmail(email)) || (!validator_1.default.isNumeric(rut)) || (typeof rutDv !== 'string') || (typeof firstName !== 'string') || (typeof lastName !== 'string')) {
            success = false;
            error: 'Error in the format of the data';
        }
        else {
            const count = await User.update(dataObject, { where: { id } })
                .catch((err) => {
                logger_1.default.error(`Error updating user id(${id}): ${err}`);
                success = false;
                error = 'Unknow error';
            });
            if (count) {
                success = true;
                error = null;
            }
        }
        return {
            success,
            error,
            data: dataObject
        };
    },
};

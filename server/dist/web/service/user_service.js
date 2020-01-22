"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../loaders/logger"));
const messages_1 = __importDefault(require("../../config/messages"));
const User = require('../../db/models').User;
exports.default = {
    create: async (email, password) => {
        let userDTO, msg = null;
        await User.findOne({ where: { email } })
            .then(async (user) => {
            if (user) {
                msg = messages_1.default.user["email.error.already"];
                return null;
            }
            await User.create({ email, password })
                .then((userCreated) => {
                if (userCreated)
                    userDTO = userCreated.get({ plain: true });
                else
                    msg = messages_1.default.user["general.create.error"];
            }).catch((err) => {
                logger_1.default.error(err);
            });
        }).catch((err) => {
            logger_1.default.error(err);
        });
        return {
            user: userDTO,
            msg
        };
    },
};

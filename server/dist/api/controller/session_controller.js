"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const logger_1 = __importDefault(require("../../loaders/logger"));
const general_1 = __importDefault(require("../service/response/general"));
const login_1 = __importDefault(require("../service/response/session/login"));
const user_model_1 = require("../model/user_model");
exports.default = {
    self: (req, res, next) => {
        if (req.session && req.session.user) {
            res.json(req.session.user);
        }
        else {
            res.json(general_1.default.error('You do not have a session.'));
        }
    },
    login: (req, res, next) => {
        passport_1.default.authenticate('local', { failureFlash: true }, (err, user, info) => {
            if (err) {
                console.log('err', err);
                let response = login_1.default(err, false, null); //req.flash('error')
                res.json(response);
            }
            else if (info) {
                let response = login_1.default(info.message, false, null);
                res.json(response);
            }
            else if (req.session) {
                if (user) {
                    let userDTO = user_model_1.UserModel.toPlainObject(user);
                    req.session.user = userDTO;
                    let response = login_1.default(null, true, userDTO);
                    res.json(response);
                }
                else {
                    res.json(general_1.default.error('Unknow error'));
                }
            }
            else {
                res.json(general_1.default.error('Unknow error'));
            }
        })(req, res, next);
    },
    logout: (req, res, next) => {
        if (req.session) {
            req.session.destroy((err) => {
                if (err) {
                    logger_1.default.error(`Session error on destroy [${err}]`);
                    res.json(general_1.default.error(`Session error on destroy [${err}]`));
                }
                else {
                    res.json({ logout: 'success' });
                }
            });
        }
    },
};

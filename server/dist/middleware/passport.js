"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_local_1 = require("passport-local");
const logger_1 = __importDefault(require("../loaders/logger"));
const messages_1 = __importDefault(require("../config/messages"));
const User = require('../db/models').User;
exports.default = () => {
    return new passport_local_1.Strategy({ usernameField: 'email', passwordField: 'password' }, async (email, password, done) => {
        const user = await User.findOne({
            where: { email },
            include: ['role']
        }).catch((err) => {
            logger_1.default.error(`User error in loggin [${user.email}]: ${err}`);
            return done(err);
        });
        if (!user)
            return done(null, false, { message: messages_1.default.user["email.error.notexists"] });
        else if (!user.isValidPassword(password))
            return done(null, false, { message: messages_1.default.user["password.error.incorrect"] });
        else {
            logger_1.default.info(`User success in loggin [${user.email}]`);
            return done(null, user);
        }
    });
};

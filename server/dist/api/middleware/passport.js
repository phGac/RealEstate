"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_jwt_1 = require("passport-jwt");
const logger_1 = __importDefault(require("../../loaders/logger"));
const User_1 = __importDefault(require("../../db/models/User"));
const opts = {
    secretOrKey: process.env.secretOrKey,
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
};
function default_1(passport) {
    passport.use(new passport_jwt_1.Strategy(opts, (jwt_payload, done) => {
        User_1.default.findById(jwt_payload.id)
            .then((user) => {
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        }).catch((err) => {
            logger_1.default.error(`Passport error: ${err}`);
        });
    }));
}
exports.default = default_1;
;

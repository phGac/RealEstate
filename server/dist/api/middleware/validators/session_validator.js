"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("../../service/response/session/login"));
exports.default = {
    hasSession: (req, res, next) => {
        if (req.session && req.session.user) {
            res.json({ status: 'Session is already!', user: req.session.user });
        }
        else {
            next();
        }
    },
    login: (req, res, next) => {
        console.log(req.body);
        if (req.body.email && req.body.password) {
            next();
        }
        else {
            const response = login_1.default('email or password not found', false, null);
            res.json(response);
        }
    },
};

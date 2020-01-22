"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config"));
exports.default = (req, res, next) => {
    if ((req.session && req.session.user) || (config_1.default.web.NotNeedAuth.includes(req.path)))
        return next();
    res.redirect('/login');
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (req, res, next) => {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer', '');
    const key = process.env.JWT_KEY;
    console.log('token =>', token);
    console.log('key =>', key);
    if (token && key) {
        const data = jsonwebtoken_1.default.verify(token, key);
        console.log(data);
        if (req.session) {
            //req.session.token = token;
        }
    }
};

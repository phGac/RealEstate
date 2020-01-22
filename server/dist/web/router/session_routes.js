"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const session_controller_1 = __importDefault(require("../controller/session_controller"));
exports.default = (router) => {
    router.route('/login')
        .get(session_controller_1.default.index)
        .post(session_controller_1.default.login);
};

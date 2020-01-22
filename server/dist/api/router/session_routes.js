"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const session_controller_1 = __importDefault(require("../controller/session_controller"));
const session_validator_1 = __importDefault(require("../middleware/validators/session_validator"));
exports.default = (router) => {
    router.route('/login')
        .post(session_validator_1.default.hasSession, session_validator_1.default.login, session_controller_1.default.login);
    router.get('/logout', session_controller_1.default.logout);
    router.get('/me', session_controller_1.default.self);
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registration_controller_1 = __importDefault(require("../controller/registration_controller"));
exports.default = (router) => {
    router.route('/register')
        .post(registration_controller_1.default.signup);
};

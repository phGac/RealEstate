"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registration_controller_1 = __importDefault(require("../controller/registration_controller"));
exports.default = (router) => {
    router.route('/register')
        .get(registration_controller_1.default.index)
        .post(registration_controller_1.default.create);
};

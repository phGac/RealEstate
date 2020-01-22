"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_controller_1 = __importDefault(require("../controller/home_controller"));
exports.default = (router) => {
    router.route('/')
        .get(home_controller_1.default.index);
};

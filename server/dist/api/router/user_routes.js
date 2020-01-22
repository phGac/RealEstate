"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("../controller/user_controller"));
exports.default = (router) => {
    router.get('/users', user_controller_1.default.all);
    router.get('/users/:id/properties', user_controller_1.default.properties);
    router.get('/users/:id/posts', user_controller_1.default.posts);
    router.route('/users/me')
        .put(user_controller_1.default.self, user_controller_1.default.update);
};

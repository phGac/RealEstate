"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_controller_1 = __importDefault(require("../controller/users_controller"));
function default_1(router) {
    /**
     * @route POST api/users/register
     * @desc Register user
     * @access Public
     */
    router.post('/register', users_controller_1.default.register);
    router.post('/login', users_controller_1.default.login);
    router.get('/self', users_controller_1.default.currentUserSession);
}
exports.default = default_1;

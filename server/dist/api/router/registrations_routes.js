"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validators = require('../middleware/validators');
const UserController = require('../controller/user_controller');
exports.default = (router) => {
    router.route('/register')
        .post(validators.userSignup, UserController.signup);
};

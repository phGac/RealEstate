"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../service/user_service"));
const register_1 = __importDefault(require("../service/response/session/register"));
exports.default = {
    signup: async (req, res, next) => {
        const { email, password, firstName, lastName, rut, rutDv } = req.body;
        const data = await user_service_1.default.create(email, password, 1, firstName, lastName, rut, rutDv);
        const response = register_1.default(data.msg, data.created, data.user);
        return res.json(response);
    },
};

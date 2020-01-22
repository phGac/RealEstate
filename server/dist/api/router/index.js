"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const session_routes_1 = __importDefault(require("./session_routes"));
const registration_routes_1 = __importDefault(require("./registration_routes"));
const user_routes_1 = __importDefault(require("./user_routes"));
const property_routes_1 = __importDefault(require("./property_routes"));
exports.default = () => {
    const router = express_1.Router();
    session_routes_1.default(router);
    registration_routes_1.default(router);
    user_routes_1.default(router);
    property_routes_1.default(router);
    return router;
};

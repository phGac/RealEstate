"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const home_routes_1 = __importDefault(require("./home_routes"));
const registration_routes_1 = __importDefault(require("./registration_routes"));
exports.default = () => {
    const router = express_1.default.Router();
    home_routes_1.default(router);
    registration_routes_1.default(router);
    return router;
};

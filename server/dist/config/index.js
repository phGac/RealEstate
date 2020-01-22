"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const envFound = dotenv_1.default.config();
if (!envFound) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
exports.default = {
    port: parseInt(process.env.PORT || '3000', 10),
    databaseURL: process.env.DATABASE_URL,
    logs: {
        level: process.env.LOG_LEVEL || 'silly'
    },
    api: {
        prefix: '/api',
        requireLogin: false,
        secret: 'jhvksdakjcuhjabxxczkjn',
        NotNeedAuth: [
            '/api/login',
            '/api/register',
        ]
    },
    web: {}
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("../loaders/logger"));
if (process.env && process.env.DATABASE_URL) {
    const URL = process.env.DATABASE_URL;
    console.log('URL', URL);
    mongoose_1.default.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        logger_1.default.info('MongoDB successfully connected');
    }).catch((err) => {
        logger_1.default.error(`MongoDB connection error: ${err}`);
    });
}
else {
    logger_1.default.error('gobal enverioment not found: DATABASE_URL');
}

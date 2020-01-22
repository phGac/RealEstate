"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../loaders/logger"));
const Property = require('../../db/models').Property;
exports.default = {
    all: async (req, res, next) => {
        const properties = await Property.findAll({ include: ['owner'] }) //
            .catch((err) => {
            logger_1.default.error(`Property.All error: ${err}`);
        });
        res.json(properties);
    },
    show: async (req, res, next) => {
        const { id } = req.params;
        const property = await Property.findOne({ where: { id }, include: ['feature'] })
            .catch((err) => {
            logger_1.default.error(`Property.show id(${id}) error: ${err}`);
        });
        res.json(property);
    },
    new: () => {
    },
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const property_controller_1 = __importDefault(require("../controller/property_controller"));
exports.default = (router) => {
    router.get('/properties', property_controller_1.default.all);
    router.get('/properties/:id', property_controller_1.default.show);
    router.route('/properties/new')
        .post(property_controller_1.default.new);
};

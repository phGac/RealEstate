"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../service/user_service"));
exports.default = {
    index: (req, res) => {
        let params = { error: req.flash('error') };
        res.render('home/register', params);
    },
    create: async (req, res) => {
        let result = await user_service_1.default.create(req.body.email, req.body.password);
        if (result.msg) {
            res.render('home/register', { info: result.msg });
        }
        else {
            res.json(result.user);
        }
    },
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const general_1 = __importDefault(require("../service/response/general"));
const user_service_1 = __importDefault(require("../service/user_service"));
const User = require('../../db/models').User;
exports.default = {
    all: async (req, res, next) => {
        await User.findAll()
            .then((users) => {
            res.json(users);
        });
    },
    properties: async (req, res, next) => {
        const { id } = req.params;
        await User.findOne({ where: { id }, include: ['properties'] })
            .then((user) => {
            res.json(user.properties);
        });
    },
    posts: async (req, res, next) => {
        const { id } = req.params;
        await User.findOne({ where: { id }, include: ['posts'] })
            .then((user) => {
            res.json(user.posts);
        });
    },
    self: (req, res, next) => {
        if (req.session && req.session.user) {
            req.params.id = req.session.user.id;
            next();
        }
        else {
            res.json(general_1.default.error('You do not have a session.'));
        }
    },
    update: async (req, res, next) => {
        const { id } = req.params;
        const { email, rut, rutDv, firstName, lastName } = req.body;
        let result = await user_service_1.default.update(id, email, rut, rutDv, firstName, lastName);
        if (req.session && result.success) {
            Object.keys(result.data).forEach((key) => {
                if (req.session)
                    req.session.user[key] = result.data[key];
            });
            res.json(req.session.user);
        }
        else {
            res.json(general_1.default.error(result.error));
        }
    },
};

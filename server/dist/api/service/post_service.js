"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../loaders/logger"));
const Post = require('../../db/models').Post;
exports.default = {
    create: async (idBroker, idProperty, description) => {
        let newPost, success;
        await Post.create({
            idBroker,
            idProperty,
            description
        }).then((post) => {
            if (post) {
                newPost = post;
                success = true;
            }
            else {
                success = false;
            }
        }).catch((err) => {
            logger_1.default.error(`Error on create post: ${err}`);
            success = false;
        });
        return {
            post: newPost,
            success
        };
    }
};

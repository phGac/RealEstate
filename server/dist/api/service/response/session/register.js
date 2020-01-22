"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, success, user) => {
    return {
        error: err,
        success,
        user
    };
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    error: (error) => {
        return {
            error
        };
    },
    noSession: () => {
        return {
            error: {
                info: 'Error: login first',
                message: ''
            }
        };
    },
};

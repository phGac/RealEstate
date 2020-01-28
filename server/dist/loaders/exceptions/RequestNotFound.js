"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class RequestNotFound extends Error {
    constructor(message = 'The request is not found.', status = 404) {
        super(message);
        this.name = 'RequestNotFound';
        this.status = status;
    }
    toString() {
        if (this.request)
            return `${this.name} [${this.request.method}]: ${this.message} on ${this.request.url}`;
        else
            return `${this.name}: ${this.message}`;
    }
}
exports.default = RequestNotFound;

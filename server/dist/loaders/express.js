"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const router_1 = __importDefault(require("../api/router"));
const passport_2 = __importDefault(require("../api/middleware/passport"));
const RequestNotFound_1 = __importDefault(require("./exceptions/RequestNotFound"));
exports.default = ({ app }) => {
    app.get('/status', (req, res) => {
        res.status(200).end();
    });
    app.head('/status', (req, res) => {
        res.status(200).end();
    });
    app.use(cors_1.default());
    app.use(require('method-override')('_method'));
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    // sessions
    app.use(express_session_1.default({
        secret: config_1.default.api.secret,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    }));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    passport_2.default(passport_1.default);
    // routes
    app.use(router_1.default);
    /// catch 404 forward to error handler
    app.use((req, res, next) => {
        const err = new RequestNotFound_1.default();
        err.request = {
            url: req.url,
            method: req.method,
            query: req.query,
            bodyParams: req.body,
            headers: req.headers,
        };
        next(err);
    });
    /// error handlers
    app.use((err, req, res, next) => {
        if (err.name === 'UnauthorizedError') {
            return res
                .status(404)
                .send({ message: err.message })
                .end();
        }
        return next(err);
    });
    app.use((err, req, res, next) => {
        res.status(err.status)
            .json({
            errors: {
                message: err.message,
            },
        });
    });
};

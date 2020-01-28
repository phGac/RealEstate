import config from '../config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';

import apiRoutes from '../api/router';
import passportConfig from '../api/middleware/passport';

import RequestNotFound, {RequestValue} from './exceptions/RequestNotFound';

export default ({ app }: { app: express.Application }) => {
    app.get('/status', (req, res) => {
        res.status(200).end();
    });
    app.head('/status', (req, res) => {
        res.status(200).end();
    });

    app.use(cors());
    app.use(require('method-override')('_method'));
    app.use(bodyParser.urlencoded({ extended: true }));

    // sessions
    app.use(session({
        secret: config.api.secret,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    passportConfig(passport);

    // routes
    app.use(apiRoutes);

    /// catch 404 forward to error handler
    app.use((req, res, next) => {
        const err = new RequestNotFound();
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
    app.use((err: RequestNotFound, req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (err.name === 'UnauthorizedError') {
            return res
                .status(404)
                .send({ message: err.message })
                .end();
        }
        return next(err);
    });

    app.use((err: RequestNotFound, req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.status(err.status)
            .json({
                errors: {
                    message: err.message,
                },
            });
    });
};
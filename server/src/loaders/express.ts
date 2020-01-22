import config from '../config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import flash from 'connect-flash';

import apiRouter from '../api/router';

import passportMiddle from '../middleware/passport';
import authUserMiddle from '../api/middleware/auth_user';

import passportConfig from '../config/passport_config';

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
    app.use(flash());

    // sessions
    app.use(session({
        secret: config.api.secret,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    }));
    passport.use(passportMiddle());
    passportConfig(passport);
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(authUserMiddle);

    // routes
    app.use(config.api.prefix, apiRouter());

    /// catch 404 forward to error handler
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        //err.status = 404; // status not found
        next(err);
    });

    /// error handlers
    app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (err.name === 'UnauthorizedError') {
            return res
                .status(404)
                .send({ message: err.message })
                .end();
        }
        return next(err);
    });
    app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
        //res.status(err.status || 500); 404
        res.json({
            errors: {
                message: err.message,
            },
        });
    });
};
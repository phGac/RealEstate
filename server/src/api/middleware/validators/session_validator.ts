import express from 'express';

import loginResponse from '../../service/response/session/login';

export default {
    hasSession: (req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (req.session && req.session.user) {
            res.json({ status: 'Session is already!', user: req.session.user });
        } else {
            next();
        }
    },
    login: (req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log(req.body);
        if(req.body.email && req.body.password) {
            next();
        } else {
            const response = loginResponse('email or password not found', false, null);
            res.json(response);
        }
    },
};
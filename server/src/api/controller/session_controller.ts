import express from 'express';
import passport from 'passport';
import logger from '../../loaders/logger';

import generalResponse from '../service/response/general';
import loginResponse from '../service/response/session/login';

import { UserModel } from '../model/user_model';

export default {
    self: (req: express.Request, res: express.Response, next: express.NextFunction) => {
        if(req.session && req.session.user) {
            res.json(req.session.user);
        } else {
            res.json(generalResponse.error('You do not have a session.'));
        }
    },
    login: (req: express.Request, res: express.Response, next: express.NextFunction) => {
        passport.authenticate('local', { failureFlash: true }, (err, user, info) => {
            if(err) {
                console.log('err', err);
                let response = loginResponse(err, false, null); //req.flash('error')
                res.json(response);
            } 
            else if (info) {
                let response = loginResponse(info.message, false, null);
                res.json(response);
            }
            else if (req.session) {
                if(user) {
                    let userDTO = UserModel.toPlainObject(user);
                    req.session.user = userDTO;
                    let response = loginResponse(null, true, userDTO);
                    res.json(response);
                } else {
                    res.json(generalResponse.error('Unknow error'));
                }
            } else {
                res.json(generalResponse.error('Unknow error'));
            }

        })(req, res, next);
    },
    logout: (req: express.Request, res: express.Response, next: express.NextFunction) => {
        if(req.session) {
            req.session.destroy((err) => {
                if(err) {
                    logger.error(`Session error on destroy [${err}]`);
                    res.json(generalResponse.error(`Session error on destroy [${err}]`));
                } else {
                    res.json({ logout: 'success' });
                }
            });
        }
    },
};

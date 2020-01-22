import express from 'express';
import logger from '../../loaders/logger';

import generalResponse from '../service/response/general';

import UserService from '../service/user_service';

const User = require('../../db/models').User;

export default {
    all: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        await User.findAll()
            .then((users: any) => {
                res.json(users);
            });
    },
    properties: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const { id } = req.params;
        await User.findOne({ where: { id }, include: ['properties'] })
            .then((user: any) => {
                res.json(user.properties);
            });
    },
    posts: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const { id } = req.params;
        await User.findOne({ where: { id }, include: ['posts'] })
            .then((user: any) => {
                res.json(user.posts);
            });
    },
    self: (req: express.Request, res: express.Response, next: express.NextFunction) => {
        if(req.session && req.session.user) {
            req.params.id = req.session.user.id;
            next();
        } else {
            res.json(generalResponse.error('You do not have a session.'));
        }
    },
    update: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const { id } = req.params;
        const { email, rut, rutDv, firstName, lastName } = req.body;

        let result = await UserService.update(id, email, rut, rutDv, firstName, lastName);

        if(req.session && result.success) {
            Object.keys(result.data).forEach((key: string) => {
                if (req.session)
                    req.session.user[key] =  result.data[key];
            });
            res.json(req.session.user);
        } else {
            res.json(generalResponse.error(result.error));
        }
    },

};
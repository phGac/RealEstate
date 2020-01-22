import express from 'express';

import UserService from '../service/user_service';

import registerResponse from '../service/response/session/register';

export default {
    signup: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const { email, password, firstName, lastName, rut, rutDv } = req.body;
        const data = await UserService.create(email, password, 1, firstName, lastName, rut, rutDv);
        const response = registerResponse(data.msg, data.created, data.user);
        return res.json(response);
    },
};
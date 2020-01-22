import express from 'express';

import config from '../../config';

export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if( (req.session && req.session.user) || (! config.api.requireLogin) || (config.api.NotNeedAuth.includes(req.path)) )
        return next();

    res.json({ error: 'login first' });
};
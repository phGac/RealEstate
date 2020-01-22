import { Router } from 'express';

import SessionController from '../controller/session_controller';

import SessionValidator from '../middleware/validators/session_validator';

export default (router: Router) => {
    router.route('/login')
        .post(
            SessionValidator.hasSession,
            SessionValidator.login,
            SessionController.login);
    router.get('/logout', SessionController.logout);
    router.get('/me', SessionController.self);
};
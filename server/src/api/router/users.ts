import { Router } from 'express';

import UsersController from '../controller/users_controller';

export default function(router: Router) {

    /**
     * @route POST api/users/register
     * @desc Register user
     * @access Public
     */
    router.post('/register', UsersController.register);
    router.post('/login', UsersController.login);
    router.get('/self', UsersController.currentUserSession);

}
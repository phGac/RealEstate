import { Router } from 'express';

import UserController from '../controller/user_controller';

export default (router: Router) => {
    router.get('/users', UserController.all);
    router.get('/users/:id/properties', UserController.properties);
    router.get('/users/:id/posts', UserController.posts);
    router.route('/users/me')
        .put(UserController.self,
            UserController.update);
};
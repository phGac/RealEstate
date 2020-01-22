import { Router } from 'express';

import RegistrationController from '../controller/registration_controller';

export default (router: Router) => {
    router.route('/register')
        .post(RegistrationController.signup);
};
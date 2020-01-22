import { Router } from 'express';

import PropertyController from '../controller/property_controller';

export default (router: Router) => {
    router.get('/properties', PropertyController.all);
    router.get('/properties/:id', PropertyController.show);
    
    router.route('/properties/new')
        .post(PropertyController.new);
};
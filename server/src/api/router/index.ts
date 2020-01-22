import { Router } from 'express';

import sessionRoutes from './session_routes';
import registrationRouter from './registration_routes';
import userRouter from './user_routes';
import propertyRouter from './property_routes';

export default () => {
    const router = Router();

    sessionRoutes(router);
    registrationRouter(router);
    userRouter(router);
    propertyRouter(router);

    return router;
};
import { Strategy } from 'passport-local';
import logger from '../loaders/logger';
import messages from '../config/messages';

const User = require('../db/models').User;

export default () => {
    return new Strategy(
        { usernameField: 'email', passwordField: 'password' },
        async (email, password, done) => {
            const user = 
                await User.findOne({ 
                    where: { email },
                    include: ['role']
                }).catch((err: any) => {
                    logger.error(`User error in loggin [${user.email}]: ${err}`);
                    return done(err);
                });

            if (! user)
                return done(null, false, { message: messages.user["email.error.notexists"] });
            else if (! user.isValidPassword(password))
                return done(null, false, { message: messages.user["password.error.incorrect"] });
            else {
                logger.info(`User success in loggin [${user.email}]`);
                return done(null, user);
            }
    });
};
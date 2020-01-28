import { ExtractJwt, Strategy as JWTStrategy, StrategyOptions } from 'passport-jwt';
import logger from '../../loaders/logger';
import User from '../../db/models/User';

const opts: StrategyOptions = {
    secretOrKey: process.env.secretOrKey,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

export default function(passport: any) {
    passport.use(
        new JWTStrategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
                .then((user: any) => {
                    if(user) {
                        return done(null, user);
                    }
                    return done(null, false);
                }).catch((err: any) => {
                    logger.error(`Passport error: ${err}`);
                });
        })
    )
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require('../db/models').User;
exports.default = (passport) => {
    passport.serializeUser((user, done) => {
        let userPlainObject = user.get({ plain: true }); // sequelize object to plain user object
        done(null, userPlainObject.id);
    });
    passport.deserializeUser((id, done) => {
        User.findByPk(id, { raw: true })
            .then((user) => {
            console.log('dezerialize', user);
            done(null, user);
        })
            .catch((err) => {
            done(err);
        });
    });
};

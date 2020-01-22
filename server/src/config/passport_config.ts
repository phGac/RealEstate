const User = require('../db/models').User;

export default (passport: any) => {
    passport.serializeUser((user: any, done: any) => {
        let userPlainObject = user.get({ plain: true }); // sequelize object to plain user object
        done(null, userPlainObject.id);
    });
    passport.deserializeUser((id: any, done: any) => {
        User.findByPk(id, { raw: true })
            .then((user: any) => {
                console.log('dezerialize', user);
                done(null, user);
            })
            .catch((err: any) => {
                done(err);
            });
    });
};
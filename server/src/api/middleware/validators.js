module.exports = {
    userSignup(req, res, next) {
        if(req.body.firstName && req.body.lasatName && req.body.email && req.body.password) {
            next();
        }
        res.json({status: 'error'});
    }
};
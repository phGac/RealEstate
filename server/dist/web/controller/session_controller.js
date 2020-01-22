"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
exports.default = {
    index: (req, res) => {
        let params = { error: req.flash('error') };
        res.render('home/login', params);
    },
    login: (req, res, next) => {
        passport_1.default.authenticate('local', { failureFlash: true }, (err, user, info) => {
            if (err) {
                console.log('err', err);
                res.render('home/login', { error: req.flash('error') });
            }
            if (req.session) {
                if (user) {
                    let userDTO = user.get({ plain: true });
                    req.session.user = userDTO;
                    res.redirect('/');
                }
                else {
                    res.render('home/login', { info: info.message });
                }
            }
            else {
                res.redirect('/login');
            }
        })(req, res, next);
    },
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register_service_1 = __importDefault(require("../service/register_service"));
const login_service_1 = __importDefault(require("../service/login_service"));
const User_1 = __importDefault(require("../../db/models/User"));
exports.default = {
    register: (req, res, next) => {
        const { errors, isValid } = register_service_1.default(req.body);
        if (!isValid) {
            return res.status(400)
                .json(errors);
        }
        User_1.default.findOne({ email: req.body.email })
            .then((user) => {
            if (user) {
                return res.status(400)
                    .json({ email: "Email already exists" });
            }
            else {
                const newUser = new User_1.default({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                });
                // hash password before saving in database
                bcryptjs_1.default.genSalt(10, (err, salt) => {
                    if (err)
                        throw err;
                    bcryptjs_1.default.hash(newUser.password, salt, (err, hash) => {
                        newUser.password = hash;
                        newUser
                            .save()
                            .then((user) => res.json(user))
                            .catch((err) => console.log(err));
                    });
                });
            }
        }).catch((err) => {
            console.log(err);
        });
    },
    login: (req, res, next) => {
        const { errors, isValid } = login_service_1.default(req.body);
        if (!isValid)
            return res.status(400).json(errors);
        const { email, password } = req.body;
        User_1.default.findOne({ email }).then((user) => {
            if (!user)
                return res.status(404).json({ emailnotfound: 'Email not found' });
            bcryptjs_1.default.compare(password, user.password).then((isMatch) => {
                if (isMatch) {
                    const payload = {
                        id: user.id,
                        name: user.name,
                    };
                    jsonwebtoken_1.default.sign(payload, process.env.secretOrKey || '', {
                        expiresIn: '1m',
                    }, (err, token) => {
                        req.user = payload;
                        if (err)
                            res.json({ error: err });
                        else
                            res.json({
                                success: true,
                                token: `Bearer ${token}`
                            });
                    });
                }
                else {
                    return res
                        .status(400)
                        .json({ passwordincorrect: 'Password incorrect' });
                }
            });
        });
    },
    currentUserSession: (req, res, next) => {
        const authoritation = req.header('authorization');
        if (authoritation) {
            const token = authoritation.replace('Bearer ', '');
            jsonwebtoken_1.default.verify(token, process.env.secretOrKey || '', (err, user) => {
                if (err) {
                    switch (err.name) {
                        case 'TokenExpiredError':
                            return res.json({ error: 'Token expired' });
                        default:
                            return res.json({ error: 'Unknow error' });
                    }
                }
                else {
                    return res.json(user);
                }
            });
        }
        else {
            return res.status(404).end();
        }
    },
};

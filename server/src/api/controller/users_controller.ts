import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import validateRegisterInput from '../service/register_service';
import validateLoginInput from '../service/login_service';

import User from '../../db/models/User';

export default {
    register: (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const { errors, isValid } = validateRegisterInput(req.body);
        if (!isValid) {
            return res.status(400)
                    .json(errors);
        }

        User.findOne({ email: req.body.email })
            .then((user: any) => {
                if (user) {
                    return res.status(400)
                        .json({ email: "Email already exists" });
                } else {
                    const newUser: any = new User({
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password,
                    });

                    // hash password before saving in database
                    bcrypt.genSalt(10, (err, salt) => {
                        if(err) throw err;

                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            newUser.password = hash;
                            newUser
                                .save()
                                .then((user: any) => res.json(user))
                                .catch((err: any) => console.log(err));
                        });
                    });
                }
            }).catch((err: any) => {
                console.log(err);
            });
    },

    login: (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const { errors, isValid } = validateLoginInput(req.body);
        if(! isValid)
            return res.status(400).json(errors);

        const { email, password } = req.body;
        User.findOne({ email }).then((user: any) => {
            if(!user)
                return res.status(404).json({ emailnotfound: 'Email not found' });
            
            bcrypt.compare(password, user.password).then((isMatch: boolean) => {
                if(isMatch) {
                    const payload = {
                        id: user.id,
                        name: user.name,
                    };

                    jwt.sign(
                        payload,
                        process.env.secretOrKey || '',
                        {
                            expiresIn: '1m', // => https://github.com/zeit/ms
                        },
                        (err, token) => {
                            req.user = payload;
                            
                            if(err)
                                res.json({ error: err });
                            else
                                res.json({
                                    success: true,
                                    token: `Bearer ${token}`
                                })
                        }
                    )
                } else {
                    return res
                        .status(400)
                        .json({ passwordincorrect: 'Password incorrect' });
                }
            });
        });
    },

    currentUserSession: (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const authoritation = req.header('authorization');
        if(authoritation) {
            const token = authoritation.replace('Bearer ', '');
            jwt.verify(token, process.env.secretOrKey || '', (err, user) => {
                if(err) {
                    switch(err.name) {
                        case 'TokenExpiredError': 
                            return res.json({ error: 'Token expired' });
                        default:
                            return res.json({ error: 'Unknow error' });
                    }
                } else {
                    return res.json(user);
                }
            });
        } else {
            return res.status(404).end();
        }
    },

};
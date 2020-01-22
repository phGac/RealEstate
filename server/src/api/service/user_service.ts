import validator from 'validator';
import logger from '../../loaders/logger';
import messages from '../../config/messages';

import { UserModel } from '../model/user_model';

const User = require('../../db/models').User;
const Role = require('../../db/models').Role;

export default {
    create: async (email: string, password: string, status: number = 0, firstName: string = '', lastName: string = '', rut: number = 0, rutDv: string = '', role: string = 'default') => {
        let userDTO, msg = null;
        await User.findOne({ where: { email } })
            .then((user: any) => {
                if(user) {
                    msg = messages.user["email.error.already"];
                    userDTO = UserModel.toPlainObject(user);
                }
            }).catch((err: any) => {
                logger.error(err);
            });

        if(! userDTO) {
            let roleId: number|null = null;
            await Role.findOne({ where: { name: role } })
                .then((role: any) => {
                    if(role) {
                        roleId = role.id;
                    }
                }).catch((err: any) => {
                    logger.error(err);
                });

            if (roleId) {
                let user = await User.create({ 
                        email, 
                        password, 
                        firstName, 
                        lastName, 
                        rut, 
                        rutDv, 
                        status, 
                        roleId 
                    }).catch((err: any) => {
                        logger.error(err);
                    });
                
                if (user) {
                    user = await User.findByPk(user.id, { include: ['role'] });
                    userDTO = UserModel.toPlainObject(user);
                } else {
                    msg = messages.user["general.create.error"];
                }
            }
            
            return {
                user: userDTO,
                msg,
                created: true,
            };
        }

        return {
            user: userDTO,
            msg,
            created: false,
        };
    },
    update: async (id: number|string, email: string, rut: string, rutDv: string, firstName: string, lastName: string) => {

        let success, error = null;
        const dataObject: any = { email, rut, rutDv, firstName, lastName };

        if ((! validator.isEmail(email)) || (! validator.isNumeric(rut)) || (typeof rutDv !== 'string') || (typeof firstName !== 'string') || (typeof lastName !== 'string')) {
            success = false;
            error: 'Error in the format of the data';
        } else {

            const count = 
                await User.update(dataObject, { where: { id } })
                    .catch((err: any) => {
                        logger.error(`Error updating user id(${id}): ${err}`);
                        success = false;
                        error = 'Unknow error';
                    });
            if(count) {
                success = true;
                error = null;
            }
        }

        return {
            success,
            error,
            data: dataObject
        };
    },
};
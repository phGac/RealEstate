import express from 'express';
import logger from '../../loaders/logger';

const Property = require('../../db/models').Property;

export default {
    all: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const properties = await Property.findAll({ include: ['owner'] }) //
            .catch((err: any) => {
                logger.error(`Property.All error: ${err}`);
            });
        
        res.json(properties);
    },
    show: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const { id } = req.params;
        const property = await Property.findOne({ where: { id }, include: ['feature'] })
            .catch((err: any) => {
                logger.error(`Property.show id(${id}) error: ${err}`);
            });
        
        res.json(property);
    },
    new: () => {
        
    },
};
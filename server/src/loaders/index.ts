import express from 'express';
import expressLoader from './express';
import Logger from './logger';

export default async ({ expressApp }: { expressApp: express.Application }) => {
    await expressLoader({ app: expressApp });
    Logger.info('✌️ Express loaded');
};
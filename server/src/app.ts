import express from 'express';
import config from './config';
import loaders from './loaders';
import logger from './loaders/logger';

async function startServer() {
    const app = express();

    await loaders({ expressApp: app });

    app.listen(config.port, (err: any) => {
        if (err) {
            logger.error(err);
            process.exit(1);
            return;
        }
        logger.info(`⚓  Server listening on port: ${config.port}  ⚓`);
    });
}

startServer();

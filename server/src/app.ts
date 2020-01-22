import config from './config';
import express from 'express';
import loaders from './loaders';
import Logger from './loaders/logger';

async function startServer() {
    const app = express();

    await loaders({ expressApp: app });

    app.listen(config.port, (err: any) => {
        if (err) {
            Logger.error(err);
            process.exit(1);
            return;
        }
        Logger.info(`⚓  Server listening on port: ${config.port}  ⚓`);
    });
}

startServer();
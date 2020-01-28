import mongoose from 'mongoose';
import logger from '../loaders/logger';

if(process.env && process.env.DATABASE_URL) {
    const URL = process.env.DATABASE_URL;
    console.log('URL', URL);
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
    }).then(() => {
        logger.info('MongoDB successfully connected');
    }).catch((err: any) => {
        logger.error(`MongoDB connection error: ${err}`);
    });
} else {
    logger.error('gobal enverioment not found: DATABASE_URL');
}

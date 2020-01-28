import dotenv from 'dotenv';

const envFound = dotenv.config();
if (! envFound) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
    port: parseInt(process.env.PORT || '3000', 10),
    databaseURL: process.env.DATABASE_URL,
    logs: {
        level: process.env.LOG_LEVEL || 'silly'
    },
    api: {
        prefix: '/api',
        requireLogin: false,
        secret: 'lnfeliwnlwanlndWAWnwdqounwuuWAFDEAidiwaddawkWADEQ45wd65dwwd1sadadwdwaef1GRSEFssasewa454w8551awddawjnnwarjdawekeocoawmawdowqdowdao',
        NotNeedAuth: [
            '/api/login',
            '/api/register',
        ]
    },
    web: {}
};
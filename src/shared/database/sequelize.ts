import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const isTest = process.env.NODE_ENV === 'test';

const sequelize = new Sequelize(
    isTest ? process.env.TEST_DB_NAME || 'test_db_name' : process.env.DB_NAME || 'db_name',
    isTest ? process.env.TEST_DB_USER || 'test_db_user' : process.env.DB_USER || 'db_user',
    isTest ? process.env.TEST_DB_PASS || 'test_db_pass' : process.env.DB_PASS || 'db_pass',
    {
        host: isTest ? process.env.TEST_DB_HOST || 'localhost' : process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        port: Number(isTest ? process.env.TEST_DB_PORT || 5432 : process.env.DB_PORT || 5432),
        logging: !isTest,
        dialectOptions: isTest
            ? {}
            : {
                ssl: process.env.DB_SSL === 'true' ? {
                    require: true,
                    rejectUnauthorized: false,
                } : false,
            },
    }
);

export default sequelize;
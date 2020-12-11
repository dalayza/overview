import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'denis',
    'denis',
    'admin',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 1000
        },
        logging: false
    }
);
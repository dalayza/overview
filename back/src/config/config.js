require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": "my_db",
    "dialect": "postgres",
    "port": 5432
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "port": 5432
  },
  "production": {
    "username": process.env.DB_USER,
    "password": 123456,
    "database": process.env.DB_NAME,
    "host":     "192.168.0.0",
    "dialect": "postgres",
    "port": 5432
  }
};
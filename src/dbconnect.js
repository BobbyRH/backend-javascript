const configenv = require('dotenv').config();
const { Sequelize } = require('sequelize');
const db = new Sequelize(
    process.env.DATABASE_NAME, 
    process.env.DATABASE_USER, 
    process.env.DATABASE_PASSWORD, 
    {
        host: process.env.SERVER_HOST,
        dialect: process.env.DATABASE_TYPE,
        port: process.env.DATABASE_PORT,
        logging: false
    }
  );

  module.exports = db;
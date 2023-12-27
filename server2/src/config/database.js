// dbConfig.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud', 'root', '', {
    dialect: 'mariadb',
    host: 'localhost',
    port: 3306,
});

module.exports = sequelize;

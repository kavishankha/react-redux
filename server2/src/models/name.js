// model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Name = sequelize.define('Name', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Name;

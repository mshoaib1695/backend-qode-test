

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const comments = sequelize.define(
    "comments",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        comment: {
            type: DataTypes.STRING,
        },
    },
    {
        underscored: true
    }
);

module.exports = comments;

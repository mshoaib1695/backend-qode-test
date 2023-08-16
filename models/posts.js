

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const posts = sequelize.define(
    "posts",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
    },
    {
        underscored: true
    }
);

module.exports = posts;

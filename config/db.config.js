const { Sequelize } = require("sequelize");
var { dbLogs } = require("../utils/logs");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: function (str) {
      // do your own logging
      console.log(str);
      dbLogs.info(str);
    },
  }
);

module.exports = sequelize;

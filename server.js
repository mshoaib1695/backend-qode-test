require("dotenv").config();
const express = require("express");
const app = require("./app");
const sequelize = require("./config/db.config");
var { logConnect } = require("./utils/logs");
require("./models/relations");
require("./utils/logs");

app.use(logConnect);

const publicRoutes = require("./appdata/base-routes/routes.public");
app.use('/uploads', express.static('uploads'));

app.use(publicRoutes);

// Start server
let port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log("Server is running at port " + port);
});
server.keepAliveTimeout = 65000;

const initDB = async () => {
  // Check DB connection
  try {
    await sequelize.authenticate();
    //Uncomment for resetting the DB in dev environment
    // await sequelize.sync({ alter: true,  });
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
initDB();

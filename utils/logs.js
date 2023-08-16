var log4js = require("log4js");

log4js.configure({
  appenders: {
    out: { type: "stdout" },
    app: {
      type: "dateFile",
      filename: "logs/application.log",
      pattern: "yyyy-MM-dd",
      compress: true,
      keepFileExt : true,
      numBackups: 30,
      layout: { type: "coloured" }  
    },
    db: {
      type: "dateFile",
      filename: "logs/db.log",
      pattern: "yyyy-MM-dd",      
      compress: true,
    },
  },
  categories: {
    default: { appenders: ["out", "app"], level: "debug" },
    app: { appenders: ["app"], level: "debug" },
    db: { appenders: ["db"], level: "debug" },
  },
});

const dbLogs = log4js.getLogger("db");
const appLog = log4js.getLogger("app");
const logConnect = log4js.connectLogger(appLog, {
  level: "auto",
  statusRules: [
    { from: 200, to: 299, level: "info" },
    { codes: [401, 403, 500, 404], level: "error" },
  ],
});
module.exports = {
  dbLogs,
  appLog,
  logConnect,
};

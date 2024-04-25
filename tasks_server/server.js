const express = require("express");
const routes = require("./routes/tasks.js");

const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use("/tasks", routes);
  return app;
};

module.exports = createServer;

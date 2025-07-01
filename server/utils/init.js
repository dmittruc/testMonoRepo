/** @format */

const express = require("express");
const router = require("../routes/index");
const sequelize = require("../db");
const path = require("path");
const cors = require("cors");

const initApp = (dirname) => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.static(path.resolve(dirname, "static")));
  app.use("/api", router);
  return app;
};

const initSequelize = async () => {
  await sequelize.sync();
};

module.exports = {
  initApp,
  initSequelize,
};

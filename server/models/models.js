/** @format */

const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Task = sequelize.define("task", {
  taskId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Task;

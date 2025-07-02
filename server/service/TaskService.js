/** @format */

const Task = require("../models/models");

class TaskService {
  async getTasks(filter = "all") {
    let where = {};
    if (filter === "active") {
      where.completed = false;
    } else if (filter === "completed") {
      where.completed = true;
    }
    const tasks = await Task.findAll({ where });
    return tasks;
  }
  async getTask(taskId) {
    const task = await Task.findOne({ where: { taskId: taskId } });
    return task;
  }
  async createTask(title, description) {
    const task = await Task.create({ title, description });
    return task;
  }
  async updateTask(taskId, title, description, completed) {
    const task = await Task.findOne({ where: { taskId: taskId } });
    if (!task) {
      console.log("updateTask: Task was not found");
    }
    await Task.update(
      { title, description, completed },
      { where: { taskId: taskId } }
    );
    return await Task.findOne({ where: { taskId: taskId } });
  }
  async deleteTask(taskId) {
    const task = await Task.findOne({ where: { taskId: taskId } });
    if (!task) {
      console.log("deleteTask: Task was not found");
    }
    const deletedTask = await Task.destroy({ where: { taskId: taskId } });
    return !!deletedTask;
  }
  async patchTask(taskId, updates) {
    const task = await Task.findOne({ where: { taskId: taskId } });
    if (!task) {
      console.log("patch task: Task was not found");
      return null;
    }
    await Task.update(updates, { where: { taskId: taskId } });
    return await Task.findOne({ where: { taskId: taskId } });
  }
}

module.exports = new TaskService();

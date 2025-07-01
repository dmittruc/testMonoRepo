/** @format */

const Task = require("../models/models");

async function formTask(taskId) {
  const task = await Task.findOne({ where: { taskId: taskId } });
  let formedTask = { ...task.dataValues };
  return {
    ...formedTask,
  };
}

class TaskService {
  async getTasks() {
    const tasks = await Task.findAll();
    const formedTask = await Promise.all(
      tasks.map((task) => formTask(task.taskId))
    );
    return formedTask;
  }
  async getTask(taskId) {
    const task = await Task.findOne({ where: { taskId: taskId } });
    return task;
  }
  async createTask(title, description) {
    const task = await Task.create({ title, description });
    return task;
  }
  async updateTask(taskId, title, description) {
    const task = await Task.findOne({ where: { taskId: taskId } });
    if (!task) {
      console.log("updateTask: Task was not found");
    }
    await Task.update({ title, description }, { where: { taskId: taskId } });
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

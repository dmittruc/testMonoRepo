/** @format */

const TaskService = require("../service/TaskService");

class TaskController {
  async getTasks(req, res, next) {
    try {
      const { filter = "all" } = req.query;
      const tasks = await TaskService.getTasks(filter);
      return res.json({ tasks });
    } catch (e) {
      console.log("GET getTasks TaskService error:", e);
      res.status(500).json({ message: "Server error" });
    }
  }

  async getTask(req, res, next) {
    try {
      const { taskId } = req.params;
      const task = await TaskService.getTask(taskId);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res.json({ task });
    } catch (e) {
      console.log("GET getTask TaskService error:", e);
      return res.status(500).json({ message: "Server error" }); // ✅
    }
  }

  async createTask(req, res, next) {
    try {
      const { title, description } = req.body;
      const task = await TaskService.createTask(title, description);
      return res.json({ task });
    } catch (e) {
      console.log("POST createTasks TaskService error:", e);
    }
  }

  async updateTask(req, res, next) {
    try {
      const { taskId } = req.params;
      const { title, description, completed } = req.body;
      const task = await TaskService.updateTask(
        taskId,
        title,
        description,
        completed
      );
      return res.json({ task });
    } catch (e) {
      console.log("PUT updateTask TaskService error:", e);
    }
  }

  async deleteTask(req, res, next) {
    try {
      const { taskId } = req.params;
      await TaskService.deleteTask(taskId);
      return res.json({ message: `deleted task with id: ${taskId}` });
    } catch (e) {
      console.log("DELETE deleteTask TaskService error:", e);
    }
  }

  async patchTask(req, res, next) {
    try {
      const { taskId } = req.params;
      const updates = req.body;
      const task = await TaskService.patchTask(taskId, updates);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res.json(task);
    } catch (e) {
      console.log("PATCH patchTask TaskService error");
    }
  }
}

module.exports = new TaskController();

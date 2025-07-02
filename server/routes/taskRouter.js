/** @format */

const { Router } = require("express");
const TaskController = require("../controllers/TaskController");

const router = new Router({ mergeParams: true });

router.get("/", TaskController.getTasks);
router.get("/:taskId", TaskController.getTask);
router.post("/", TaskController.createTask);
router.put("/:taskId", TaskController.updateTask);
router.delete("/:taskId", TaskController.deleteTask);
router.patch("/:taskId", TaskController.patchTask);

module.exports = router;

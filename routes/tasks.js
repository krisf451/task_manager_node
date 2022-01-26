const express = require("express");
const router = require("express").Router();
const Tasks = require("../controllers/tasks");

router.route("/").get(Tasks.getAllTasks);
router.route("/").post(Tasks.createTask);
router.route("/:id").get(Tasks.getTaskById);
router.route("/:id").patch(Tasks.updateTask);
router.route("/:id").delete(Tasks.deleteTask);

module.exports = router;

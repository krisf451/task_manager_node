const Task = require("../models/task");

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (error) {
    next(error);
  }
};
const createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    next(error);
  }
};
const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const taskById = await Task.find().where({ _id: id });
    res.status(201).json({ taskById });
  } catch (error) {
    next(error);
  }
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};

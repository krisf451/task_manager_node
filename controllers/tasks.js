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
    const [task] = await Task.find().where({ _id: id });
    res.status(201).json({ task });
  } catch (error) {
    next(error);
  }
};
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [updatedTask] = await Task.find().where({ _id: id });
    updatedTask.name = req.body.name;
    updatedTask.completed = req.body.completed;
    await updatedTask.save();
    res.status(201).json({ updatedTask });
  } catch (error) {
    next(error);
  }
};
const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [deletedTask] = await Task.find().where({ _id: id });
    await Task.deleteOne({ _id: id });
    res.status(201).json({ message: "Successful Deletion", deletedTask });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};

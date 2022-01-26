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
    const task = await Task.findOne({ _id: id });
    if (!task) {
      next({ status: 404, message: `No task with id: ${id} was found` });
    }
    res.status(201).json({ task });
  } catch (error) {
    next({
      status: 500,
      message: "That ID does not exist, something went wrong",
    });
  }
};
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    if (!task) {
      next({ status: 404, message: `No task with id: ${id} was found` });
    }
    res.status(201).json({ task });
  } catch (error) {
    next(error);
  }
};
const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete(
      { _id: id },
      {
        useFindAndModify: false,
      }
    );
    if (!task) {
      next({ status: 404, message: `No task with id: ${id} was found` });
    }
    res.status(200).json({ status: "Successful Deletion", task: null });
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

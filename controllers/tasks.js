const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next({
      status: 404,
      message: `No task with id: ${taskID} was found`,
    });
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  if (!task) {
    return next({
      status: 404,
      message: `No task with id: ${taskID} was found`,
    });
  }
  res.status(201).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete(
    { _id: taskID },
    {
      useFindAndModify: false,
    }
  );
  if (!task) {
    return next({
      status: 404,
      message: `No task with id: ${taskID} was found`,
    });
  }
  res.status(200).json({ status: "Successful Deletion", task: null });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

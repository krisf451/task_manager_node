const router = require("express").Router();
const Tasks = require("../controllers/tasks");

router.route("/").get(Tasks.getAllTasks).post(Tasks.createTask);
router
  .route("/:id")
  .get(Tasks.getTask)
  .patch(Tasks.updateTask)
  .delete(Tasks.deleteTask);

module.exports = router;

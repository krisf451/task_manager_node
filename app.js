const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");

//middlware

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", taskRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}...`));

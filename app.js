const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//middlware
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

//routes
app.use("/api/v1/tasks", taskRoutes);

const PORT = process.env.PORT || 9000;

const start = async () => {
  try {
    await connectDB(process.env.CONNECTION_STRING);
    app.listen(PORT, () =>
      console.log(`server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

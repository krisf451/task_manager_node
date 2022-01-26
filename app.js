const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middlware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", taskRoutes);

app.use(notFound);
app.use(errorHandlerMiddleware);

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

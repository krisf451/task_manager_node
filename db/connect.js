require("dotenv").config();
const mongoose = require("mongoose");

const connnectionString = process.env.CONNECTION_STRING;

const connectDB = (url) => {
  return mongoose.connect(connnectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;

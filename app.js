const express = require("express");
const morgan = require("morgan");
const courseRouter = require("./routes/courseRouter");
const studentRouter = require("./routes/studentRouter");

const app = express();

// middleware

app.use(express.json());
app.use(express.static(`${__dirname}/views`));
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}
app.use((req, res, next) => {
  console.log("hello");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Mounting the Router
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/students", studentRouter);

module.exports = app;

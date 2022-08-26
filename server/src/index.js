const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const port = process.env.PORT || 3007;

const app = express();
// middlewares
app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: "https://localhost:3000",
  })
);

// the slash route
app.get("/", (req, res) => {
  res.json({
    message: "Hello ",
  });
});

// not found middleware
app.use((req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error); // next will go the next middleware.
});

// Error handler - you must have 4 parameters
app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack:
      process.env.NODE_ENV === "production" ? "pancake stack" : error.stack, // the stack trace. We only show the stack during development
  });
});

app.listen(port, () => {
  console.log(`I am listening my brother ${port}`);
});

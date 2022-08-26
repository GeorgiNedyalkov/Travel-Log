const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const middlewares = require("./middlewares");

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

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(port, () => {
  console.log(`I am listening my brother ${port}`);
});

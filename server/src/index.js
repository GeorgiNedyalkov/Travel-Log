const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const port = process.env.PORT || 3007;

const app = express();
app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: "https://localhost:3000",
  })
);

app.listen(port, () => {
  console.log(`I am listening my brother ${port}`);
});

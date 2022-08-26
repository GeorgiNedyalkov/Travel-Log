const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error); // next will go the next middleware.
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack:
      process.env.NODE_ENV === "production" ? "pancake stack" : error.stack, // the stack trace. We only show the stack during development
  });
};

module.exports = {
  notFound,
  errorHandler,
};

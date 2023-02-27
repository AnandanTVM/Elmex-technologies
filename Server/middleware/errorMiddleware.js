const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  console.log("error");
  res.json({
    ip: req.ip,
    api: req.originalUrl,
    message: err.message,
    stack: err.stack,
  });
};
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res
    .status(404)
    .json({ ip: req.ip, message: error.message, stack: error.stack });
  // next(error);
};
module.exports = { errorHandler, notFound };

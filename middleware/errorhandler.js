const errorhandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? statusCode : 500;
  switch (statusCode) {
    case 400:
      res.json({
        title: "Validation failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 404:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
  }
};

export default errorhandler;

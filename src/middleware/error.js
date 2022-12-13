const { ValidationError } = require("express-json-validator-middleware");

const errorMiddleware = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    response.status(400).send(error.validationErrors);
    next();
  } else {
    next(error);
  }
};

module.exports =  errorMiddleware ;

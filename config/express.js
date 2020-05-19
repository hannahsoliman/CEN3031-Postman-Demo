const express = require("express"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  simpleRoutes = require("../routes/simpleRoutes");

module.exports.init = () => {
  //initialize app
  const app = express();

  //morgan used for logging HTTP requests to the console
  app.use(morgan("dev"));

  //bodyParser middleware used for resolving the req and res body objects (urlEncoded and json formats)
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  //add routers for http://localhost:8000/api/
  app.use("/api/", simpleRoutes);

  return app;
};

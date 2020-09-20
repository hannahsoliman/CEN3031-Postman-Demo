const express = require("express"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  simpleRoutes = require("../routes/simpleRoutes");

module.exports.init = () => {
  //initialize app
  const app = express();

    //morgan - module for logging HTTP requests to the console - dev format - simple tokens
    app.use(morgan("dev"));

    //bodyParser - module for getting body of request object - of specified type
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //additions to routes http://localhost:8000/api/ - if has /api, then direct to simpleRoutes
    app.use("/api/", simpleRoutes);

  return app;
};

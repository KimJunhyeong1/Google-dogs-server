const { Router } = require("express");
const morganMiddleware = require("./middlewares/morganMiddleware");
const login = require("./routes/login");
const docs = require("./routes/docs");

module.exports = () => {
  const app = Router();

  app.use(morganMiddleware);

  login(app);
  docs(app);

  return app;
};

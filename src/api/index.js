const { Router } = require("express");
const morganMiddleware = require("./middlewares/morganMiddleware");
const login = require("./routes/login");
const main = require("./routes/main");
const docs = require("./routes/docs");

module.exports = () => {
  const app = Router();

  app.use(morganMiddleware);

  login(app);
  main(app);
  docs(app);

  return app;
};

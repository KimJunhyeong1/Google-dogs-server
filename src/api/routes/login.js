const { Router } = require("express");
const AuthController = require("../controllers/auth");

const route = Router();

module.exports = (app) => {
  app.use("/login", route);

  route.post("/", AuthController.login);
};

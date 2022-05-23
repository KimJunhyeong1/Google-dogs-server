const { Router } = require("express");
const { isLoggedIn } = require("../middlewares/authorization");
const Voting = require("../../models/Doc");
const { catchAsync } = require("../../utils/asyncHandler");

const route = Router();

module.exports = (app) => {
  app.use("/", route);

  route.get(
    "/",
    catchAsync(async (req, res, next) => {
      const votings = await Voting.getAll();

      res.render("index", { votings });
    })
  );
};

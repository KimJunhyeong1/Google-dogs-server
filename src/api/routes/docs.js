const dayjs = require("dayjs");
const { Router } = require("express");
const { default: mongoose } = require("mongoose");
const Doc = require("../../models/Doc");
const { catchAsync } = require("../../utils/asyncHandler");
const { isLoggedIn } = require("../middlewares/authorization");

const route = Router();

module.exports = (app) => {
  app.use("/docs", route);

  route.get("/", isLoggedIn, async (req, res, next) => {
    try {
      const docs = await Doc.find({
        creator: mongoose.Types.ObjectId(req.user.id),
      }).lean();

      res.json(docs);
    } catch (error) {
      next(error);
    }
  });

  route.get("/:docId", isLoggedIn, async (req, res, next) => {
    const { docId } = req.params;

    try {
      const doc = await Doc.findById(docId).lean();

      res.status(200).json(doc);
    } catch (error) {
      next(error);
    }
  });

  route.post("/", isLoggedIn, async (req, res, next) => {
    console.log(req.user, req.body);

    const doc = req.body;

    try {
      const newDoc = await Doc.create({
        ...doc,
        creator: req.user.id,
        createAt: new Date(),
      });

      res.status(201).json(newDoc);
    } catch (error) {
      next(error);
    }
  });

  route.patch("/:docId", isLoggedIn, async (req, res, next) => {});
};

const { Router } = require("express");
const { isLoggedIn } = require("../middlewares/authorization");
const DocController = require("../controllers/docs");

const route = Router();

module.exports = (app) => {
  app.use("/docs", route);

  route.get("/", isLoggedIn, DocController.getAllMyDocs);
  route.get("/:docId", isLoggedIn, DocController.getDoc);

  route.post("/", isLoggedIn, DocController.createDoc);
};

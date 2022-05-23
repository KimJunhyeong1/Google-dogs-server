const { Router } = require("express");
const jwt = require("jsonwebtoken");
const config = require("../../config");
const { auth } = require("../../services/firebase");
const User = require("../../models/User");

const route = Router();

module.exports = (app) => {
  app.use("/login", route);

  route.post("/", async (req, res, next) => {
    const firebaseToken = req.headers.authorization;

    try {
      let firebaseUser;
      if (firebaseToken) {
        firebaseUser = await auth.verifyIdToken(firebaseToken);
      }

      if (!firebaseUser) return res.sendStatus(401);

      const { name, email } = firebaseUser;

      let user = await User.findOne({ email });

      if (!user) {
        user = await User.create({ email, name });
      }

      const token = jwt.sign({ id: user._id, email, name }, config.jwtSecret);

      return res.json({ name, email, token });
    } catch (error) {
      next(error);
    }
  });
};

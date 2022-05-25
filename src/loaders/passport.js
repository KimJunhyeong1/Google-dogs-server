const passport = require("passport");
const User = require("../models/User");
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const config = require("../config");

module.exports = (app) => {
  app.use(passport.initialize());

  passport.use(
    new JWTStrategy(
      {
        secretOrKey: config.JWT_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        passReqToCallback: true,
      },
      async (req, jwtPayload, done) => {
        try {
          await User.findOne({ id: jwtPayload.id });

          req.user = jwtPayload;

          return done(null, jwtPayload);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );
};

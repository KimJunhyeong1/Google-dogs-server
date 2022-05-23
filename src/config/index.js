const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();

module.exports = {
  databaseURL: process.env.MONGODB_URI,

  jwtSecret: process.env.JWT_SECRET,
};

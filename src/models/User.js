const mongoose = require("mongoose");
const joi = require("joi");
const joigoose = require("joigoose")(mongoose);
const bcrypt = require("bcrypt");

const joiUserSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
});

const userSchema = new mongoose.Schema(joigoose.convert(joiUserSchema));

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return user;
};

userSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};

const User = mongoose.model("User", userSchema);

module.exports = User;

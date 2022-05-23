const mongoose = require("mongoose");
const joi = require("joi");
const joigoose = require("joigoose")(mongoose);

const joiDocSchema = joi.object({
  title: joi.string().required(),
  creator: joi
    .string()
    .meta({ _mongoose: { type: "ObjectId", ref: "User" } })
    .required(),
  createAt: joi.date().required(),
  content: joi.string().required(),
});

const DocSchema = new mongoose.Schema(joigoose.convert(joiDocSchema));

const Doc = mongoose.model("Doc", DocSchema);

module.exports = Doc;

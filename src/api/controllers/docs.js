const { default: mongoose } = require("mongoose");
const Doc = require("../../models/Doc");
const { catchAsync } = require("../../utils/asyncHandler");

exports.getAllMyDocs = async (req, res, next) => {
  try {
    const docs = await Doc.find({
      creator: mongoose.Types.ObjectId(req.user.id),
    }).lean();

    res.json(docs);
  } catch (error) {
    next(error);
  }
};

exports.getDoc = async (req, res, next) => {
  const { docId } = req.params;

  try {
    const doc = await Doc.findById(docId).lean();

    res.status(200).json(doc);
  } catch (error) {
    next(error);
  }
};

exports.createDoc = async (req, res, next) => {
  const doc = req.body;

  try {
    const newDoc = await Doc.create({
      ...doc,
      creator: req.user.id,
    });

    res.status(201).json(newDoc);
  } catch (error) {
    next(error);
  }
};

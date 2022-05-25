const { default: mongoose } = require("mongoose");
const Doc = require("../../models/Doc");
const { catchAsync } = require("../../utils/asyncHandler");

exports.getAllMyDocs = catchAsync(async (req, res, next) => {
  const docs = await Doc.find({
    creator: mongoose.Types.ObjectId(req.user.id),
  }).lean();

  res.json(docs);
});

exports.getDoc = catchAsync(async (req, res, next) => {
  const { docId } = req.params;

  const doc = await Doc.findById(docId).lean();

  res.status(200).json(doc);
});

exports.createDoc = catchAsync(async (req, res, next) => {
  const doc = req.body;

  const newDoc = await Doc.create({
    ...doc,
    creator: req.user.id,
  });

  res.status(201).json(newDoc);
});

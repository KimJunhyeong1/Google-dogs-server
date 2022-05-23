const User = require("../models/User");
const Voting = require("../models/Doc");
const dayjs = require("dayjs");

const createDoc = async (votingInputDTO, creatorId) => {
  // const { title, dueDate, dueTime } = votingInputDTO;
  // const date = dayjs(`${dueDate} ${dueTime}`, "YYYY-MM-DD HH:mm");
  // const options = [];

  // for (const key of Object.keys(votingInputDTO).filter((key) =>
  //   key.includes("option")
  // )) {
  //   const newOption = await Option.create({ name: votingInputDTO[key] });

  //   options.push(newOption._id);
  // }

  // const newVoting = await Voting.create({
  //   title,
  //   creator: creatorId,
  //   dueDate: date.toDate(),
  //   options,
  // });

  // await User.pushNewVoting(creatorId, newVoting._id);

  return newVoting;
};

const deleteVoting = async (votingId, userId) => {
  await User.pullExistVoting(userId, votingId);
  await Voting.deleteOne({ _id: votingId });
};

const getMyVoting = async (userId) => {
  const { myVotings: myVotingIds } = await User.findOne({
    _id: userId,
  });

  const votings = await Voting.getVotingsByIds(myVotingIds);

  return votings;
};

const submitVoting = async (votingSubmitDTO, votingId, userId) => {
  const { seletedOption } = votingSubmitDTO;

  await Option.increseCount(seletedOption);
  await Voting.pushNewVoter(votingId, userId);
};

module.exports = { createDoc, deleteVoting, getMyVoting, submitVoting };

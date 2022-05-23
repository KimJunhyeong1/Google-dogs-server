const User = require("../models/User");
const createError = require("http-errors");

const signUp = async (userInputDTO) => {
  const { email, nickname, password, confirmPassword } = userInputDTO;

  if (password !== confirmPassword)
    throw createError(400, "비밀번호가 일치하지 않습니다. 다시 시도해보세요.");

  const user = await User.findOne({ email });

  if (user) throw createError(400, "해당 이메일을 가진 사용자가 존재합니다.");

  const newUser = await User.create({
    email,
    nickname,
    password,
  });

  return newUser;
};

module.exports = { signUp };

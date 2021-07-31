const db = require("../models");
const User = db.user;

exports.getUsers = async (req, res) => {
  const users = await User.find({}).exec();

  if (!users) {
    return res.status(404).send({ message: "User Not found." });
  }

  res.status(200).send(users);
};

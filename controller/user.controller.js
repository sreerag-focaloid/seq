const db = require("../models");

exports.createUser = async (req, res) => {
  const data = req.body;
  try {
    const user = await db.User.create(data);
    res.send(user);
  } catch (err) {
    res.send(err);
  }
};

exports.listUser = async (req, res) => {
  try {
    const user = await db.User.findAll({
      include: [db.Post],
    });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
};

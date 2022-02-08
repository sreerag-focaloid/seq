const db = require("../models");

exports.createPost = async (req, res) => {
  const data = req.body;
  try {
    const post = await db.Post.create(data);
    res.send(post);
  } catch (err) {
    res.send(err);
  }
};

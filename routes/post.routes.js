const express = require("express");
const { createPost } = require("../controller/post.controller");
const router = express.Router();

router.post("/", createPost);

module.exports = router;

const express = require("express");
const { listUser, createUser } = require("../controller/user.controller");
const router = express.Router();

router.post("/", createUser);
router.get("/", listUser);

module.exports = router;

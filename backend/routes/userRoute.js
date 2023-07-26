const express = require("express");
const { registerUser, signup } = require("../controllers/userContoller");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", signup);

module.exports = router;

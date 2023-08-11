const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUser,
  loginStatus,
  updatedUser,
  changePassword,
  forgotPassword,
  resetPassword,
} = require("../controllers/userContoller");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getuser", protect, getUser);
router.get("/loggedin", loginStatus);
router.patch("/updateuser", protect, updatedUser);
router.patch("/changepassword", protect, changePassword);
router.post("/forgotPassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);

module.exports = router;

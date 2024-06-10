const { protect } = require("../middleware/authMiddleware");
const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");

const router = express.Router();
router.get("/some-protected-route", protect, (req, res) => {
  res.send("This is a protected route");
});

router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;

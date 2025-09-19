const express = require("express");
const router = express.Router();
const { registerAdmin, loginAdmin } = require("../controllers/authController");

// IMPORTANT: Protect registration in production
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

module.exports = router;

const express = require("express");
const router = express.Router();
const { login, register, getMe } = require("../controllers/authController");
const { authenticate } = require("../controllers/auth");

router.post("/login", login);
router.post("/register", register);
router.get("/fetchData", authenticate, getMe);

module.exports = router;

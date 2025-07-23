const express = require("express");
const router = express.Router();
const {authenticateJWT}= require("../middleware/authMiddleware");

// Protected endpoint example
router.get("/",authenticateJWT, (req, res) => {
  res.json({ message: "This is protected data", data: req.user });
});

// Endpoint to check if user is authenticated
router.get("/api/check-auth",authenticateJWT, (req, res) => {
  res.json({ authenticated: true, data: req.user });
});

module.exports = router;

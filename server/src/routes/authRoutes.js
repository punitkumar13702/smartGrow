const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");

const { authenticateJWT } = require("../middleware/authMiddleware");

router.post("/signup", AuthController.signupVendor);
router.post("/login", AuthController.loginVendor);
router.post("/signout", AuthController.signoutVendor);
router.post("/forgotPassword", AuthController.requestOtpForPasswordReset);
router.post("/resetPassword", AuthController.resetPasswordWithOtp);



module.exports = router;
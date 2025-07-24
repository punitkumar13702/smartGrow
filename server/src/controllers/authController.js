const AuthService = require("../../services/authServices");
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

class AuthController {
  static async signupVendor(req, res) {
    try {
      const { token, user } = await AuthService.signup(req.body);
      res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "Strict" });
      res.status(StatusCodes.OK).json({ message: "Signup successful", token, user });
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }
  }

  static async loginVendor(req, res) {
    try {
      const { token, user } = await AuthService.login(req.body.email, req.body.password);
      res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "Strict" });
      res.status(StatusCodes.OK).json({ message: "Login successful", token, user });
    } catch (error) {
      res.status(StatusCodes.UNAUTHORIZED).json({ message: error.message });
    }
  }

  static signoutVendor(req, res) {
    res.clearCookie("token", { httpOnly: true, secure: false, sameSite: "Strict" });
    res.status(StatusCodes.OK).json({ message: "Signout successful" });
  }

  static async requestOtpForPasswordReset(req, res) {
    try {
      await AuthService.sendOTP(req.body.email);
      res.status(StatusCodes.OK).json({ message: "OTP sent to registered email" });
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }
  }

  static async resetPasswordWithOtp(req, res) {
    try {
      const { email, otp, newPassword } = req.body;
      await AuthService.resetPassword(email, otp, newPassword);
      res.status(StatusCodes.OK).json({ message: "Password reset successful" });
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }
  }

}

module.exports = AuthController;

const nodemailer = require('nodemailer');

const sendOTPEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"Smart Grow Support" <${process.env.SMTP_EMAIL}>`,
    to: email,
    subject: 'Your OTP for Password Reset',
    html: `<p>Your OTP is: <strong>${otp}</strong></p><p>It is valid for 5 minutes.</p>`
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendOTPEmail;

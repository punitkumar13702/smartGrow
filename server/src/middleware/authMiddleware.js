// Middleware to verify JWT from cookies
const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden: Token invalid or expired" });
    }
    req.user = decoded;
    next();
  });
};

module.exports = {authenticateJWT};

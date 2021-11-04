require("dotenv").config();
const jwt = require("jsonwebtoken");
const authenticateToken = function (req, res, next) {
  // Bring in jwt token from header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null)
    return res.status(401).json({
      msg: "Token not found",
    });

  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err)
      return res.status(403).json({
        msg: "Invalid token",
      });

    req.user = user;
    next();
  });
};

module.exports = authenticateToken;

const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/UserModel");

// Protects a route: requires a valid JWT in the "token" cookie.
// On success, attaches the authenticated user to req.user.
const protect = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Not authenticated" });
  }
};

module.exports = { protect };

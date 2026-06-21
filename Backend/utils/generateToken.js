const jwt = require("jsonwebtoken");

// Issues a JWT for the given user id and sets it as an httpOnly cookie.
// httpOnly means client-side JS (and therefore XSS payloads) can't read it.
const sendTokenCookie = (res, userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  const isProduction = process.env.NODE_ENV === "production";

  res.cookie("token", token, {
    httpOnly: true,
    secure: isProduction, // HTTPS only in production
    // "none" is required for cross-site cookies (separate frontend/backend
    // domains in production). "lax" works for local dev across ports.
    sameSite: isProduction ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days, matches token expiry
  });

  return token;
};

module.exports = { sendTokenCookie };

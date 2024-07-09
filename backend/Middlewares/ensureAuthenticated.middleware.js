import jsonwebtoken from "jsonwebtoken";
import { config } from "dotenv";
config();

export const enusreAuthenticatedMiddleware = function (req, res, next) {
  const auth = req.headers["authorization"];

  if (!auth) {
    return res
      .status(403)
      .json({ message: "Unauthorized Jwt token", success: false });
  }

  try {
    const decoded = jsonwebtoken.verify(auth, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "Unauthorized Jwt token is Required",
      success: false,
      error: error.message,
    });
  }
};

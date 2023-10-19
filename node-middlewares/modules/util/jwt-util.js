import jwt from "jsonwebtoken";
import 'dotenv/config'

export const getJwt = async (userDetails) => {
  return jwt.sign(userDetails, process.env.JWT_SECRET, { expiresIn: "30m" });
};

export const verifyToken = async (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

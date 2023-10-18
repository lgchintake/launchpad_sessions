import jwt from "jsonwebtoken";

export const getJwt = async (userDetails) => {
  return jwt.sign(userDetails, "Pune", { expiresIn: 60 * 60 });
};

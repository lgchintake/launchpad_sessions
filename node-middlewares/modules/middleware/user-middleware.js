import { verifyToken } from "../util/jwt-util.js";

export const isAuthenticatedUser = async (req, res, next) => {
  // Logic to check code
  const token = req.headers["x-access-token"];
  if (!token) {
    res.send({ status: false, message: "Not valid user" });
    return false;
  }

  try {
    const isValid = await verifyToken(token);
    req.body.userData = isValid;
    console.log({ isValid });
  } catch (error) {
    console.log("Not valid token");
    res.send({ status: false, message: "Not valid user" });
    return false;
  }
  next();
};

export const isAdminUser = async (req, res, next) => {
  console.log(req.body.userData);
  if (req.body.userData.profile === "admin") {
    next();
  } else {
    res.send({
      status: false,
      message: "User does not have access to this resource",
    });
  }
};

import UserModel from "../model/UserModel.js";
import { checkPassword, encryptPassword } from "../util/bcrypt-util.js";
import { getJwt } from "../util/jwt-util.js";
import UserLoginDetailsModel from "../model/UserLoginDetailsModel.js";

export const createUser = async (req, res) => {
  const newUser = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    password: await encryptPassword(req.body.password),
    email: req.body.email,
  });
  await newUser.save();

  res.json(newUser);
};

export const userLogin = async (req, res) => {
  console.log("body", req.body);
  const user = await UserModel.findOne({ userName: req.body.userName });
  if (!user) {
    console.log("User not found!");
    res.send({ status: false, message: "Wrong username" });
    res.end();
    return res;
  }
  const isPasswordEqual = await checkPassword(req.body.password, user.password);
  if (isPasswordEqual) {
    const signedJwt = await getJwt({
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
    });

    const userLoginDetails = new UserLoginDetailsModel({
      userName: user.userName,
      jwtToken: signedJwt,
    });
    await userLoginDetails.save();
    res.send({
      status: true,
      message: "User login successful",
      token: signedJwt,
    });
  } else {
    res.send({ status: false, message: "Wrong password" });
  }
};

export const Test = async (req, res) => {
  res.send("Ok");
};

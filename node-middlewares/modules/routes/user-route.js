import express from "express";
import { Test, createUser, userLogin } from "../controller/user-controller.js";
import { isAuthenticatedUser } from "../middleware/login-middleware.js";

const userRouter = express();

userRouter.route("/").post(createUser);
userRouter.route("/login").post(userLogin);
userRouter.route("/test").get(isAuthenticatedUser, Test);

export default userRouter;

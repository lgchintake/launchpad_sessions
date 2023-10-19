import express from "express";
import { Test, createUser, userLogin } from "../controller/user-controller.js";
import { isAdminUser, isAuthenticatedUser } from "../middleware/user-middleware.js";

const userRouter = express();

userRouter.route("/").post(createUser);
userRouter.route("/login").post(userLogin);
userRouter.route("/test").get(isAuthenticatedUser, isAdminUser, Test);

export default userRouter;

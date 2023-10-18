import mongoose from "mongoose";

const UserLoginDetailsSchema = mongoose.Schema({
  userName: { type: String },
  jwtToken: { type: String },
});

const UserLoginDetailsModel = mongoose.model(
  "userLoginDetails",
  UserLoginDetailsSchema,
  "userLoginDetails"
);

export default UserLoginDetailsModel;

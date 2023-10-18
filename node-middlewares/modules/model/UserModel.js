import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  userName: { type: String },
  password: { type: String },
  email: { type: String },
  isEmailVerified: { type: Boolean },
  profileImage: { type: String },
  coverPhoto: { type: String },
});

const UserModel = mongoose.model("user", UserSchema, "user");

export default UserModel;

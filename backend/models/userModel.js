import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verified: { type: Boolean, default: false },
  otp: {type:String},
  otpExpiry: {type:Date},
});
const userModel = mongoose.model("User", userSchema);
export default userModel;
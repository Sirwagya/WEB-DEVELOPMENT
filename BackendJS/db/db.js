import mongoose from "mongoose";

let user = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobile: Number,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

let userModel = mongoose.model("user", user);

export default userModel;

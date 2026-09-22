import express from "express";
import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";

const router = express.Router();

router.post(["/signUp", "/signup"], async (req, res) => {
  let { name, email, password, mobile, role } = req.body;
  let mail = await userModel.findOne({ email });
  password = await bcrypt.hash(password, 10);

  if (mail) {
    res.send({ msg: "Email already exists" });
  } else {
    const user = await userModel.create({
      name,
      email,
      password,
      mobile,
      role: role || "user",
    });

    res.send({
      msg: "sign up successful",
      user: user,
    });
  }
});

export default router;

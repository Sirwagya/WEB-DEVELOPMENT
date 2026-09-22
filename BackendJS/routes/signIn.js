import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const router = express.Router();

router.post(["/signin", "/signIn"], async (req, res) => {
  let { email, password } = req.body;
  let mail = await userModel.findOne({ email });

  if (mail) {
    await bcrypt.compare(password, mail.password).then((match) => {
      if (match) {
        let token = jwt.sign(
          { email: mail.email, role: mail.role },
          "hehehehehe",
        );

        console.log(token, "hehe");

        res.json({ msg: "done", token: token });
      } else {
        res.send({
          msg: "password incorrect",
        });
      }
    });
  } else {
    res.send({
      msg: "user not found",
    });
  }
});

export default router;

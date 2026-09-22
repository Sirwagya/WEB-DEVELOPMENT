import express from "express";
import crypto from "crypto";
import User from "../models/userModel.js";
import { sendEmail } from "./sendEmail.js";

const router = express.Router();

router.post(["/forgot", "/api/forgot"], async (req, res) => {
  const { email } = req.body || {};
  if (!email) {
    return res.status(400).send({ msg: "Email is required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ msg: "User not found" });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 3600000; // 1 hour validity
    await user.save();

    const resetUrl = `${req.protocol}://${req.get("host")}/reset-password/${resetToken}`;
    await sendEmail(
      user.email,
      "Password Reset Request",
      `Click the link below to reset your password:\n\n${resetUrl}`,
    );

    res.status(200).send({ msg: "Password reset email sent" });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Error sending password reset email: " + error.message });
  }
});

export default router;

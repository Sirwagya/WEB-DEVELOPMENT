import express from "express";
import bcrypt from "bcryptjs";
import User from "../db/db.js";

const router = express.Router();


// POST: Handle the password reset submission
router.post(["/reset-password/:token", "/api/reset-password/:token"], async (req, res) => {
  const { token } = req.params;
  const newPassword = req.body?.newPassword || req.body?.password;

  if (!newPassword) {
    return res.status(400).send({ msg: "New password is required" });
  }

  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() }, // Check token validity
    });

    if (!user) {
      return res.status(400).send({ msg: "Invalid or expired token" });
    }

    // Hash the new password and update user's password field
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.status(200).send({ msg: "Password reset successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Error resetting password: " + error.message });
  }
});

export default router;

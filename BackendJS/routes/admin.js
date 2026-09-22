import express from "express";
import { auth, isAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/admin", auth, isAdmin, (req, res) => {
  res.send({
    msg: "Welcome Admin",
  });
});

export default router;

import express from "express";
import { auth } from "../middleware/auth.js";

const app = express.Router();

app.get("/getData", auth, (req, res) => {
  res.send({
    msg: "Authorized",
  });
});

export default app;

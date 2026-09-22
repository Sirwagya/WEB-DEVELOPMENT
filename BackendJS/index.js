import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import signUpRouter from "./routes/signUp.js";
import signInRouter from "./routes/signIn.js";
import getDataRouter from "./routes/getData.js";
import adminRouter from "./routes/admin.js";
import forgotRouter from "./routes/forgot.js";
import resetPassRouter from "./routes/resetPass.js";

mongoose.connect("mongodb://127.0.0.1:27017/DB").then(() => {
  console.log("Connected to MongoDB");
});

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use(signUpRouter);
app.use(signInRouter);
app.use(getDataRouter);
app.use(adminRouter);
app.use(forgotRouter);
app.use(resetPassRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

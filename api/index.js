import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

const app = express();
app.use(express.json())
//
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MONGODB");
  })
  .catch((err) => {
    console.log(err);
  });



const a = 10;
app.listen(3000, () => {
  console.log("server running at port : 3000!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter)

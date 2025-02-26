require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const DB_URL = process.env.DB_URL;
const userRouter = require("./routers/user.router");
const postRouter = require("./routers/post.router")
// const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT;
try {
    mongoose.connect(DB_URL);
    console.log("Connect to mongo DB Successfully");
  } catch (error) {
    console.log("DB Connection Failed");
  }
  app.get("/", (req, res) => {
    res.send("<h1>Welcome to Dormdeals</h1>");
  });
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/post", postRouter);
  app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
  });
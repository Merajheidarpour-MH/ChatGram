// const express = require("express");
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import path from "path";
import { connectDB } from "./lib/db.js";
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json()); //req.body

const __dirname = path.resolve();
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
// make ready for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  //_ mohem yadet bashe
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
app.listen(PORT, () => {
  console.log("Server runnig on port" + PORT);
  connectDB();
});

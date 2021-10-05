import express from "express";
import mongoose from "mongoose";

const app = express();

import tickets from "../routes/api/tickets";

app.use(express.json());

mongoose
  .connect(process.env.DB_URL, {
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api/tickets", tickets);

export default app;

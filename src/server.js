import express from "express";
import mongoose from "mongoose";

const app = express();

import tickets from "../routes/api/tickets";

app.use(express.json());

app.use("/api/tickets", tickets);

export default app;

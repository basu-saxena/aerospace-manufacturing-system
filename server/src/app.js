import express from "express";
import { connectDb } from "./configs/db.js";

const app = express();

// connecting to database
connectDb();

export default app;

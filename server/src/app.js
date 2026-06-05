import express from "express";
import cors from "cors";
import { connectDb } from "./configs/db.js";
import { config } from "./configs/config.js";
import { httpError } from "./utils/httpError.js";

const app = express();

// connecting to database
connectDb();

app.use(express.json());
app.use(
  cors({
    origin: config.ALLOWED_ORIGINS,
  }),
);

app.use((req, res, next) => {
  httpError(res, 404, "Route not found");
});

app.use((err, req, res, next) => {
  httpError(res, 500, "Internal server error");
});

export default app;

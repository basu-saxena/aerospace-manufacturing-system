import express from "express";
import cors from "cors";
import { connectDb } from "./configs/db.js";
import { config } from "./configs/config.js";
import { httpError } from "./utils/httpError.js";
import workOrderRoutes from "./routes/workOrderRoute.js";
import { AppError } from "./error/appError.js";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

// connecting to database
connectDb();

app.use(express.json());
app.use(
  cors({
    origin: config.ALLOWED_ORIGINS,
  }),
);

app.use("/api/workOrder", workOrderRoutes);

app.use((req, res, next) => {
  httpError(res, 404, "Route not found");
});

app.use((err, req, res, next) => {
  console.error(err);
  if (err instanceof AppError) {
    httpError(res, err.status, err.message);
  }
  httpError(res, 500, "Internal server error");
});

export default app;

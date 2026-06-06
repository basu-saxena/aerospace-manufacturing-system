import express from "express";
import cors from "cors";
import { connectDb } from "./configs/db.js";
import { config } from "./configs/config.js";
import { httpError } from "./utils/httpError.js";
import workOrderRoutes from "./routes/workOrderRoute.js";
import departmentRoutes from "./routes/departmentRoute.js";
import { AppError } from "./error/appError.js";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

// connecting to database
connectDb();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(
  cors({
    origin: config.ALLOWED_ORIGINS,
  }),
);

app.use("/api/work-orders", workOrderRoutes);
app.use("/api/departments", departmentRoutes);

app.use((req, res, next) => {
  httpError(res, 404, "Route not found");
});

app.use((err, req, res, next) => {
  console.log(err);
  if (err instanceof AppError) {
    httpError(res, err.status, err.message);
  }
  httpError(res, 500, err.message);
});

export default app;

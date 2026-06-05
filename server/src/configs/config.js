import dotenv from "dotenv";
dotenv.config();

export const config = {
  DB_URL: process.env.MONGODB_URL,
  ALLOWED_ORIGINS: ["http://localhost:5173"],
  PORT: process.env.PORT,
};

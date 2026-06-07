import dotenv from "dotenv";
dotenv.config();

export const config = {
  DB_URL: process.env.MONGODB_URL,
  ALLOWED_ORIGINS: ["http://localhost:5173" , process.env.CLIENT_URL],
  PORT: process.env.PORT,
  CLOUDINARY: {
    API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    SECRET: process.env.CLOUDINARY_SECRET,
  },
};

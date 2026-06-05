import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Datebase Connected"),
    );

    await mongoose.connect(config.DB_URL);
  } catch (error) {
    console.error("failed to connect to db, err: ", error);
    process.exit(1);
  }
};

import { Schema, model } from "mongoose";

const statusSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model("Status", statusSchema);

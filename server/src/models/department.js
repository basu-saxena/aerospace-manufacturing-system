import { Schema, model } from "mongoose";

const departmentSchema = new Schema(
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

export default model("Department", departmentSchema);

import { Schema, model } from "mongoose";

const workOrderSchema = new Schema(
  {
    partName: {
      type: String,
      required: true,
    },
    partNumber: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    department: {
      type: Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    status: {
      type: String,
      enum: ["created", "assigned", "in_progress", "completed", "cancelled"],
      default: "created",
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model("WorkOrder", workOrderSchema);

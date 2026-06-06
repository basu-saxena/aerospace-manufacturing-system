import { Schema, model } from "mongoose";

const documentSchema = new Schema(
  {
    orderId: {
      type: Schema.Types.ObjectId,
      ref: "WorkOrder",
      required: true,
    },

    documents: {
      type: [String],
    },

    drawings: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

export default model("Document", documentSchema);

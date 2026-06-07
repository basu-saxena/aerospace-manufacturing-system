import { Types } from "mongoose";
import WorkOrder from "../models/workOrder.js";

export default {
  create: async (data) => {
    const order = await WorkOrder.create(data);
    return order;
  },

  getAll: async (sortBy, limit, sort) => {
    const sortOpt = {
      [sortBy]: sort === "desc" ? -1 : 1,
    };

    const orders = await WorkOrder.aggregate([
      {
        $lookup: {
          from: "departments",
          localField: "department",
          foreignField: "_id",
          as: "department",
          pipeline: [
            {
              $project: {
                _id: 0,
                name: 1,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "documents",
          localField: "_id",
          foreignField: "orderId",
          as: "documents",
          pipeline: [
            {
              $project: {
                _id: 0,
                drawings: 1,
                documents: 1,
              },
            },
          ],
        },
      },
      {
        $set: {
          department: {
            $first: "$department",
          },
          documents: {
            $first: "$documents",
          },
        },
      },
      {
        $sort: sortOpt,
      },
      {
        $limit: Number(limit),
      },
    ]);
    return orders;
  },

  updateStatus: async (id, status) => {
    await WorkOrder.findByIdAndUpdate(id, { $set: { status } });
  },

  getById: async (id) => {
    const order = await WorkOrder.aggregate([
      {
        $match: {
          _id: new Types.ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "departments",
          localField: "department",
          foreignField: "_id",
          as: "department",
          pipeline: [
            {
              $project: {
                _id: 0,
                name: 1,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "documents",
          localField: "_id",
          foreignField: "orderId",
          as: "documents",
          pipeline: [
            {
              $project: {
                _id: 0,
                drawings: 1,
                documents: 1,
              },
            },
          ],
        },
      },
      {
        $set: {
          department: {
            $first: "$department",
          },
          documents: {
            $first: "$documents",
          },
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
    ]);
    return order;
  },

  delete: async (id) => {
    await WorkOrder.findByIdAndDelete(id);
  },
};

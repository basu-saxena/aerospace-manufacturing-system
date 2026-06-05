import WorkOrder from "../models/workOrder.js";

export default {
  create: async (data) => {
    await WorkOrder.create(data);
  },

  getAll: async () => {
    const data = await WorkOrder.find();
    return data;
  },

  updateStatus: async (id, status) => {
    await WorkOrder.findByIdAndUpdate(id, { $set: { status } });
  },

  getById: async (id) => {
    const data = await WorkOrder.findById(id);
    return data;
  },

  delete: async (id) => {
    await WorkOrder.findByIdAndDelete(id);
  },
};

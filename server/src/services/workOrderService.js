import { NotFoundError } from "../error/notFoundError.js";
import workOrderRepo from "../repository/workOrderRepository.js";

export default {
  create: async (data) => {
    await workOrderRepo.create(data);
  },

  getAll: async (data) => {
    return await workOrderRepo.getAll();
  },

  updateStatus: async (id, status) => {
    const order = await workOrderRepo.getById(id);

    if (!order) {
      throw new NotFoundError("Order");
    }

    await workOrderRepo.updateStatus(id, status);
  },

  getById: async (id) => {
    const order = await workOrderRepo.getById(id);

    if (!order) {
      throw new NotFoundError("Order");
    }

    return order;
  },

  delete: async (id) => {
    const order = await workOrderRepo.getById(id);

    if (!order) {
      throw new NotFoundError("Order");
    }

    await workOrderRepo.delete(id);
  },
};

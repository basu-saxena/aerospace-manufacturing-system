import { NotFoundError } from "../error/notFoundError.js";
import workOrderRepo from "../repository/workOrderRepository.js";
import departmentRepo from "../repository/departmentRepository.js";
import { uploadFile } from "../utils/uploadFile.js";
import documentRepository from "../repository/documentRepository.js";

export default {
  create: async (data, drawings, documents) => {
    const department = await departmentRepo.getById(data.department);

    if (!department) {
      throw new NotFoundError("Department");
    }

    const newOrder = await workOrderRepo.create(data);

    if (drawings) {
      const result = await Promise.all(
        drawings.map((drw) => uploadFile(drw.buffer)),
      );

      await documentRepository.uploadDrawing(newOrder._id, result);
    }

    if (documents) {
      const result = await Promise.all(
        documents.map((doc) => uploadFile(doc.buffer)),
      );

      await documentRepository.uploadDocuments(newOrder._id, result);
    }
  },

  getAll: async (sortBy, limit, sort) => {
    if (!sortBy) {
      sortBy = "createdAt";
    }
    if (!limit) {
      limit = 20;
    }
    if (!sort) {
      sort = "desc";
    }
    return await workOrderRepo.getAll(sortBy, limit, sort);
  },

  updateStatus: async (id, status) => {
    const order = await workOrderRepo.getById(id);

    if (!order) {
      throw new NotFoundError("Order");
    }

    await workOrderRepo.updateStatus(id, status);
  },

  updateDepartment: async (id, depId) => {
    const [order, dep] = await Promise.all([
      workOrderRepo.getById(id),
      departmentRepo.getById(depId),
    ]);

    if (!order) {
      throw new NotFoundError("Order");
    }
    if (!dep) {
      throw new NotFoundError("Department");
    }

    await workOrderRepo.updateDepartment(id, depId);
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
    await documentRepository.deleteById(id);
  },
};

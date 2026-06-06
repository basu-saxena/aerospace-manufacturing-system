import { Types } from "mongoose";
import { ValidationError } from "../error/validationError.js";
import workOrderService from "../services/workOrderService.js";
import { httpResponse } from "../utils/httpResponse.js";

export default {
  create: async (req, res) => {
    const data = req.body;

    const requiredFields = [
      "partName",
      "partNumber",
      "quantity",
      "department",
      "dueDate",
    ];

    for (const field of requiredFields) {
      if (
        data?.[field] === undefined ||
        data?.[field] === null ||
        data?.[field] === ""
      ) {
        throw new ValidationError(`${field} is required`);
      }
    }

    if (data.quantity <= 0) {
      throw new ValidationError("Quantity must be greater than 0");
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const due = new Date(data.dueDate);

    if (due < today) {
      throw new ValidationError("Due date cannot be in the past");
    }

    if (!Types.ObjectId.isValid(data.department)) {
      throw new ValidationError("Invalid Department Id");
    }

    const drawings = req.files?.drawings;
    const documents = req.files?.documents;

    await workOrderService.create(data, drawings, documents);

    httpResponse(res, 201, "Work Order created successfully");
  },

  getAll: async (req, res) => {
    const data = await workOrderService.getAll();
    httpResponse(res, 200, "Work Orders fetched successfully", data);
  },

  getById: async (req, res) => {
    const id = req.params?.id;
    if (!id || !Types.ObjectId.isValid(id)) {
      throw new ValidationError("Invalid workOrder Id");
    }

    const data = await workOrderService.getById(id);
    httpResponse(res, 200, "Work Order fetched successfully", data);
  },

  updateStatus: async (req, res) => {
    const id = req.params?.id;
    if (!id || !Types.ObjectId.isValid(id)) {
      throw new ValidationError("Invalid workOrder Id");
    }

    const data = req.body;

    if (data?.status === undefined) {
      throw new ValidationError("Status is required");
    }

    if (
      data?.status != "created" &&
      data?.status != "assigned" &&
      data?.status != "in_progress" &&
      data?.status != "completed" &&
      data?.status != "cancelled"
    ) {
      throw new ValidationError(
        "Status must be [created , assigned , in_progress , completed , cancelled] ",
      );
    }

    await workOrderService.updateStatus(id, data.status);
    httpResponse(res, 200, "Status updated successfully");
  },

  delete: async (req, res) => {
    const id = req.params.id;

    if (!id || !Types.ObjectId.isValid(id)) {
      throw new ValidationError("Invalid workOrder Id");
    }

    await workOrderService.delete(id);
    httpResponse(res, 200, "Deleted successfully");
  },
};

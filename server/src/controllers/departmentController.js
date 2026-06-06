import departmentService from "../services/departmentService.js";
import { httpResponse } from "../utils/httpResponse.js";

export default {
  getAll: async (req, res) => {
    const departments = await departmentService.getAll();
    httpResponse(res, 200, "Fetched successfully", departments);
  },
};

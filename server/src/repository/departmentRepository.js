import Department from "../models/department.js";

export default {
  getById: async (id) => {
    return await Department.findById(id);
  },
};

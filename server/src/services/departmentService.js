import departmentRepository from "../repository/departmentRepository.js";

export default {
  getAll: async () => {
    return await departmentRepository.getAll();
  },
};

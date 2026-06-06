import departmentRepository from "../repository/departmentRepository";

export default {
  getAll: async () => {
    return await departmentRepository.getAll();
  },
};

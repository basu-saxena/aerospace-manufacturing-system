import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

const fetchAllDepartments = async () => {
  const res = await api.get("/departments");
  return res.data;
};

export { fetchAllDepartments };

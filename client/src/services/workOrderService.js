import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

const create = async (data) => {
  const res = await api.post("/work-orders", data);
  return res.data;
};

export { create };

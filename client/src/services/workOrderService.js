import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + "/work-orders",
});

const createOrder = async (data) => {
  const res = await api.post("/", data);
  return res.data;
};

const fetchAllOrders = async () => {
  const orders = await api.get("/");
  return orders.data;
};

const updateOrderStatus = async (id, status) => {
  await api.patch(`/${id}`, { status });
};

const updateOrderDepartment = async (id, department) => {
  await api.patch(`/${id}/update-department`, { department });
};

const deleteOrder = async (id) => {
  await api.delete(`/${id}`);
};

const ordersByDueDate = async () => {
  const res = await api.get("?sortBy=dueDate&sort=asc&limit=5");
  return res.data;
};

export {
  createOrder,
  fetchAllOrders,
  updateOrderStatus,
  deleteOrder,
  ordersByDueDate,
  updateOrderDepartment,
};

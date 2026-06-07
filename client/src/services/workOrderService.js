import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

const createOrder = async (data) => {
  const res = await api.post("/work-orders", data);
  return res.data;
};

const fetchAllOrders = async () => {
  const orders = await api.get("/work-orders");
  return orders.data;
};

const updateOrderStatus = async (id, status) => {
  await api.patch(`/work-orders/${id}`, { status });
};

const deleteOrder = async (id) => {
  await api.delete(`/work-orders/${id}`);
};

const ordersByDueDate = async () => {
  const res = await api.get("/work-orders?sortBy=dueDate&sort=asc&limit=5");
  return res.data;
};

export {
  createOrder,
  fetchAllOrders,
  updateOrderStatus,
  deleteOrder,
  ordersByDueDate,
};

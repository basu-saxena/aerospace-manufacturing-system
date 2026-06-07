import { WorkOrderContext } from "@/contexts/workOrderContext";
import { fetchAllDepartments } from "@/services/departmenService";
import {
  createOrder,
  fetchAllOrders,
  updateOrderStatus,
} from "@/services/workOrderService";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const useWorkOrder = () => {
  const [departments, setDepartments] = useState([]);

  const [loading, setLoading] = useState(false);
  const { workOrders, setWorkOrders } = useContext(WorkOrderContext);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetchAllDepartments();
        if (res.status) {
          setDepartments(res.data);
        }
      } catch (error) {
        const msg =
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong!";
        console.log(msg);
      } finally {
        setLoading(false);
      }
    })();

    fetchWorkOrders();
  }, []);

  const createWorkOrder = async (data) => {
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("partName", data.partName);
      formData.append("partNumber", data.partNumber);
      formData.append("quantity", data.quantity);
      formData.append("dueDate", data.dueDate);
      formData.append("department", data.department);

      // documents
      if (data.documents) {
        for (const file of data.documents) {
          formData.append("documents", file);
        }
      }

      // drawings
      if (data.drawings) {
        for (const file of data.drawings) {
          formData.append("drawings", file);
        }
      }

      const res = await createOrder(formData);
      if (res.status) {
        toast.success("Work Order created successfully!");
      }
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const fetchWorkOrders = async () => {
    try {
      setLoading(true);
      const res = await fetchAllOrders();
      if (res.status) setWorkOrders(res.data);
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      setLoading(true);

      await updateOrderStatus(id, status);
      await fetchWorkOrders();

      toast.success("Status updated !");
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return { departments, createWorkOrder, loading, workOrders, updateStatus };
};

export default useWorkOrder;

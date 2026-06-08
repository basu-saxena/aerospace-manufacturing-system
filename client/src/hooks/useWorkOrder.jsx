import { WorkOrderContext } from "@/contexts/workOrderContext";
import { fetchAllDepartments } from "@/services/departmenService";
import {
  createOrder,
  deleteOrder,
  fetchAllOrders,
  ordersByDueDate,
  updateOrderDepartment,
  updateOrderStatus,
} from "@/services/workOrderService";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useWorkOrder = () => {
  const [departments, setDepartments] = useState([]);

  const [loading, setLoading] = useState(false);
  const { workOrders, setWorkOrders } = useContext(WorkOrderContext);
  const [dueOrders, setDueOrders] = useState([]);

  const navigate = useNavigate() ;

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
    fetchDueOrders();
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
        navigate("/work-orders")
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

  const updateDepartment = async (id, depId) => {
    try {
      setLoading(true);

      await updateOrderDepartment(id, depId);
      await fetchWorkOrders();

      toast.success("Department updated !");
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

  const fetchDueOrders = async () => {
    try {
      setLoading(true);
      const res = await ordersByDueDate();
      if (res.status) setDueOrders(res.data);
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

  const deleteWorkOrder = async (id) => {
    try {
      setLoading(true);

      await deleteOrder(id);
      await fetchWorkOrders();

      toast.success("Work Order Deleted !");
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

  return {
    departments,
    createWorkOrder,
    loading,
    workOrders,
    updateStatus,
    deleteWorkOrder,
    dueOrders,
    updateDepartment,
  };
};

export default useWorkOrder;

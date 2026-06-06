import { fetchAll } from "@/services/departmenService";
import { create } from "@/services/workOrderService";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useWorkOrder = () => {
  const [departments, setDepartments] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetchAll();
        if (res.status) {
          setDepartments(res.data);
        }
      } catch (error) {
        console.log(error.response.data.message);
      } finally {
        setLoading(false);
      }
    })();
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
      for (const file of data.documents) {
        formData.append("documents", file);
      }

      // drawings
      for (const file of data.drawings) {
        formData.append("drawings", file);
      }
      const res = await create(formData);
      if (res.status) {
        toast.success("Work Order created successfully!");
      }
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return { departments, createWorkOrder, loading };
};

export default useWorkOrder;

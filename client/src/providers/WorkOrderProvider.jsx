import { WorkOrderContext } from "@/contexts/workOrderContext";
import React, { useState } from "react";

const WorkOrderProvider = ({ children }) => {
  const [workOrders, setWorkOrders] = useState([]);

  return (
    <WorkOrderContext.Provider value={{ workOrders, setWorkOrders }}>
      {children}
    </WorkOrderContext.Provider>
  );
};

export default WorkOrderProvider;

import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CreateOrder,
  DeleteOrder,
  Home,
  UpdateOrder,
  WorkOrders,
} from "@/pages";
import AppLayout from "./AppLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/work-orders" element={<WorkOrders />} />
        <Route path="/work-orders/create" element={<CreateOrder />} />
        <Route path="/work-orders/update" element={<UpdateOrder />} />
        <Route path="/work-orders/delete" element={<DeleteOrder />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

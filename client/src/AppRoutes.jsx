import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateOrder, Home, UpdateStatus } from "@/pages";
import AppLayout from "./AppLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/work-orders/create" element={<CreateOrder />} />
        <Route path="/work-orders/update" element={<UpdateStatus />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

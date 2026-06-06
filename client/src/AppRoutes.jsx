import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages";
import AppLayout from "./AppLayout";
import CreateOrder from "./pages/CreateOrder";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/work-orders/create" element={<CreateOrder />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

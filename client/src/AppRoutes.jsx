import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages";
import AppLayout from "./AppLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

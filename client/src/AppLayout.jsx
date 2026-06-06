import React, { useState } from "react";
import Navbar from "./components/web/Navbar";
import { Sidebar } from "./components/web/Sidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const AppLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar setOpen={setOpen} />
      <Sidebar setOpen={setOpen} open={open} />
      <Outlet />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AppLayout;

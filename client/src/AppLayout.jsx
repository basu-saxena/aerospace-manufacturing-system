import React, { useState } from "react";
import Navbar from "./components/web/Navbar";
import { Sidebar } from "./components/web/Sidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import WorkOrderProvider from "./providers/WorkOrderProvider";

const AppLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <WorkOrderProvider>
        <Navbar setOpen={setOpen} />
        <Sidebar setOpen={setOpen} open={open} />
        <Outlet />
        <Toaster position="top-center" reverseOrder={false} />
      </WorkOrderProvider>
    </>
  );
};

export default AppLayout;

import React, { useState } from "react";
import Navbar from "./components/web/Navbar";
import { Sidebar } from "./components/web/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar setOpen={setOpen} />
      <Sidebar setOpen={setOpen} open={open} />
      <Outlet />
    </div>
  );
};

export default AppLayout;

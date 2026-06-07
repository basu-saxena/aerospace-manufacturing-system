import React, { useEffect, useState } from "react";

import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = ({ setOpen }) => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    switch (true) {
      case path.includes("/work-orders/create"):
        setTitle("Create Work Order");
        break;
      case path.includes("/work-orders/update"):
        setTitle("Update Work Order");
        break;
      case path.includes("/work-orders/delete"):
        setTitle("Delete Work Order");
        break;
      case path.includes("/work-orders"):
        setTitle("Work Orders");
        break;
      default:
        setTitle("Dashboard");
        break;
    }
  }, [location.pathname]);

  return (
    <nav className="p-5 flex shadow-md ">
      <div className="flex gap-2 items-center">
        <Button
          variant="ghost"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <Menu />
        </Button>
        <h3>{title}</h3>
      </div>
    </nav>
  );
};

export default Navbar;

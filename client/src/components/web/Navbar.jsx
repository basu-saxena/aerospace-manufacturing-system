import React from "react";

import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const Navbar = ({ setOpen }) => {
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
        <h3>Dashboard</h3>
      </div>
    </nav>
  );
};

export default Navbar;

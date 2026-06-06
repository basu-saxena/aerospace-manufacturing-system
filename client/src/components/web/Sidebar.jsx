import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "lucide-react";

import { useNavigate } from "react-router-dom";

export function Sidebar({ open, setOpen }) {
  const options = [
    "Dashboard",
    "Work Orders",
    "Create Work Order",
    "Update Status",
    "Delete Work Order",
  ];

  const navigate = useNavigate();
  const changeSelection = (idx) => {
    switch (idx) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/work-orders");
        break;
      case 2:
        navigate("/work-orders/create");
        break;
      case 3:
        navigate("/work-orders/update");
        break;
      case 4:
        navigate("/work-orders/delete");
        break;
      default:
        navigate("/");
        break;
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Drawer direction="left" open={open}>
        <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh] ">
          <DrawerHeader>
            <Button
              className="w-fit"
              variant="ghost"
              onClick={() => setOpen((prev) => !prev)}
            >
              <X />
            </Button>
          </DrawerHeader>
          <div>
            <img className="h-20" src="/logo.png" alt="aksi" />
          </div>
          <ul>
            {options.map((item, idx) => (
              <li onClick={() => changeSelection(idx)} key={idx}>
                <div className="p-5 text-lg hover:bg-purple-400 hover:text-white rounded-md transition-all duration-300">
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

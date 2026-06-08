import { Drawer, DrawerContent, DrawerHeader } from "@/components/ui/drawer";

import { useNavigate } from "react-router-dom";

export function Sidebar({ open, setOpen }) {
  const options = [
    "Dashboard",
    "Work Orders",
    "Create Work Order",
    "Update Work Order",
    "Delete Work Order",
  ];

  const navigate = useNavigate();
  const changeSelection = (idx) => {
    switch (idx) {
      case 0:
        navigate("/");
        setOpen(false);
        break;
      case 1:
        navigate("/work-orders");
        setOpen(false);
        break;
      case 2:
        navigate("/work-orders/create");
        setOpen(false);
        break;
      case 3:
        navigate("/work-orders/update");
        setOpen(false);
        break;
      case 4:
        navigate("/work-orders/delete");
        setOpen(false);
        break;
      default:
        navigate("/");
        setOpen(false);
        break;
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Drawer direction="left" open={open} onOpenChange={setOpen}>
        <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh] ">
          <DrawerHeader>
            <div>
              <img className="h-20" src="/logo.png" alt="aksi" />
            </div>
          </DrawerHeader>

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

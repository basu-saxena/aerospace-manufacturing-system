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

export function Sidebar({ open, setOpen }) {
  const options = [
    "Dashboard",
    "Work Orders",
    "Create Work Order",
    "Update Status",
    "Delete Work Order",
  ];
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
            {options.map((item, id) => (
              <li key={id}>
                <div className="p-5 text-lg hover:bg-blue-500 hover:text-white rounded-md transition-all duration-300">
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

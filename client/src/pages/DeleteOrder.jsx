import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useWorkOrder from "@/hooks/useWorkOrder";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Loading from "@/components/web/Loading";

const DeleteOrder = () => {
  const { workOrders, loading, deleteWorkOrder } = useWorkOrder();

  if (loading) return <Loading />;
  return (
    <div className="p-5 w-full md:max-w-[70%]">
      <Table className="border border-purple-300">
        <TableHeader>
          <TableRow className="bg-purple-400 hover:bg-purple-400">
            <TableHead className="text-white font-semibold">
              Part Number
            </TableHead>
            <TableHead className="text-white font-semibold">
              Part Name
            </TableHead>
            <TableHead className="text-white font-semibold">
              Department
            </TableHead>
            <TableHead className="text-white font-semibold">Status</TableHead>
            <TableHead className="text-white font-semibold">
              Delete Order
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workOrders?.map((item, index) => (
            <TableRow
              key={item._id}
              className={
                index % 2 === 0
                  ? "bg-white"
                  : "bg-purple-100 hover:bg-purple-200"
              }
            >
              <TableCell className="font-medium text-gray-800">
                {item.partNumber}
              </TableCell>
              <TableCell className="text-gray-800">{item.partName}</TableCell>
              <TableCell className="text-gray-800">
                {item.department.name}
              </TableCell>
              <TableCell className="text-gray-800">{item.status}</TableCell>
              <TableCell>
                <Button
                  onClick={() => deleteWorkOrder(item._id)}
                  className="bg-red-400 text-white hover:bg-red-500 cursor-pointer"
                >
                  <Trash size={5} /> Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DeleteOrder;

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

const DeleteOrder = () => {
  const { workOrders, loading, deleteWorkOrder } = useWorkOrder();

  if (loading) return <div>Loading...</div>;
  return (
    <div className="p-5 max-w-[70%] ">
      <Table className="border  ">
        <TableHeader>
          <TableRow>
            <TableHead>Part Number</TableHead>
            <TableHead>Part Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Delete Order</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workOrders?.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item.partNumber}</TableCell>
              <TableCell>{item.partName}</TableCell>
              <TableCell>{item.department.name}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>
                <Button
                  onClick={() => deleteWorkOrder(item._id)}
                  className="bg-red-400 text-white hover:bg-red-300 cursor-pointer "
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

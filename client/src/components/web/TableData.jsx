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

import React from "react";

const TableData = () => {
  const { dueOrders } = useWorkOrder();
  return (
    <div className="mx-auto w-full p-5 mt-5 border rounded-md bg-purple-200 rounded-md">
      <h2 className="mb-3 text-lg">Upcoming Due Dates</h2>
      <Table>
        <TableHeader>
          <TableRow className="border rounded-md border-purple-300">
            <TableHead>Part Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Due Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border rounded-md border-purple-300 ">
          {dueOrders.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item.partName}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.department.name}</TableCell>
              <TableCell>
                {new Date(item.dueDate).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableData;

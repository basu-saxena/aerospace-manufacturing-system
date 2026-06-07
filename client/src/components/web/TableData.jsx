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
    <div className="mx-auto w-full p-5 mt-5 border rounded-md bg-white rounded-md">
      <h2 className="mb-3 text-lg font-semibold text-gray-800">
        Upcoming Due Dates
      </h2>
      <Table className="border border-purple-300">
        <TableHeader>
          <TableRow className="bg-purple-400 hover:bg-purple-400">
            <TableHead className="text-white font-semibold">
              Part Name
            </TableHead>
            <TableHead className="text-white font-semibold">Status</TableHead>
            <TableHead className="text-white font-semibold">
              Department
            </TableHead>
            <TableHead className="text-white font-semibold">Due Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dueOrders.map((item, index) => (
            <TableRow
              key={item._id}
              className={
                index % 2 === 0
                  ? "bg-white"
                  : "bg-purple-100 hover:bg-purple-200"
              }
            >
              <TableCell className="font-medium text-gray-800">
                {item.partName}
              </TableCell>
              <TableCell className="text-gray-800">{item.status}</TableCell>
              <TableCell className="text-gray-800">
                {item.department.name}
              </TableCell>
              <TableCell className="text-gray-800">
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

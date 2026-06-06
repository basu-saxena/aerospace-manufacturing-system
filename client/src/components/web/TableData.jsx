import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";

const TableData = () => {
  return (
    <div className="mx-auto w-full md:w-[80%] p-5 mt-5 border rounded-md bg-purple-200 rounded-md">
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
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>In Progress</TableCell>
            <TableCell>CNC</TableCell>
            <TableCell>3/8/26</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TableData;

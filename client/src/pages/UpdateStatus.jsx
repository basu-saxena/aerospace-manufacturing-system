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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UpdateStatus = () => {
  const { workOrders, loading, updateStatus } = useWorkOrder();

  const statusArray = ["assigned", "in_progress", "completed", "cancelled"];

  if (loading) return <div>Loading...</div>;
  return (
    <div className="p-5 max-w-[70%] ">
      <Table className="border  ">
        <TableHeader>
          <TableRow>
            <TableHead>Part Number</TableHead>
            <TableHead>Part Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Current</TableHead>
            <TableHead>Update To</TableHead>
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
                <Select
                  onValueChange={(value) => updateStatus(item._id, value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {statusArray?.map((s, i) => (
                        <SelectItem key={i} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UpdateStatus;

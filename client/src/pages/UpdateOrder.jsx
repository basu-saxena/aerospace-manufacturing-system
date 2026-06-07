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

const UpdateOrder = () => {
  const { workOrders, loading, updateStatus, departments, updateDepartment } =
    useWorkOrder();
  console.log(workOrders);
  const statusArray = [
    "created",
    "assigned",
    "in_progress",
    "completed",
    "cancelled",
  ];

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
          </TableRow>
        </TableHeader>
        <TableBody>
          {workOrders?.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item.partNumber}</TableCell>
              <TableCell>{item.partName}</TableCell>
              <TableCell>
                <Select
                  value={item.department._id}
                  onValueChange={(value) => updateDepartment(item._id, value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      {departments?.map((d) => (
                        <SelectItem key={d._id} value={d._id}>
                          {d.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>

              <TableCell>
                <Select
                  value={item.status}
                  onValueChange={(value) => updateStatus(item._id, value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
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

export default UpdateOrder;

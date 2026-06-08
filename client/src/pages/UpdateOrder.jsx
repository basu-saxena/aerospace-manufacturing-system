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
import Loading from "@/components/web/Loading";

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
              <TableCell>
                <Select
                  value={item.department._id}
                  onValueChange={(value) => updateDepartment(item._id, value)}
                >
                  <SelectTrigger className="w-[180px] bg-white border-purple-300 hover:border-purple-400">
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
                  <SelectTrigger className="w-[180px] bg-white border-purple-300 hover:border-purple-400">
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

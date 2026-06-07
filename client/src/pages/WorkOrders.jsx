import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useWorkOrder from "@/hooks/useWorkOrder";

const WorkOrders = () => {
  const { workOrders, loading } = useWorkOrder();

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
            <TableHead>Docs</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workOrders?.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item.partNumber}</TableCell>
              <TableCell>{item.partName}</TableCell>
              <TableCell>{item.department.name}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WorkOrders;

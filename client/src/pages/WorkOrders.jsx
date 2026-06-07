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
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WorkOrders = () => {
  const { workOrders, loading } = useWorkOrder();

  if (loading) return <div>Loading...</div>;
  return (
    <div className="p-5 w-full md:max-w-[70%] ">
      <Table className="border  ">
        <TableHeader>
          <TableRow>
            <TableHead>Part Number</TableHead>
            <TableHead>Part Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Images</TableHead>
            <TableHead>Pdfs</TableHead>
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
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Images</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    {item?.documents?.drawings?.length > 0 ? (
                      item.documents.drawings.map((drawing, idx) => (
                        <a
                          key={idx}
                          href={drawing}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Image {idx + 1}
                        </a>
                      ))
                    ) : (
                      <div>No Images</div>
                    )}
                  </PopoverContent>
                </Popover>
              </TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Pdfs</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    {item?.documents?.documents?.length > 0 ? (
                      item.documents.documents.map((doc, idx) => (
                        <a
                          key={idx}
                          href={doc}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Doc {idx + 1}
                        </a>
                      ))
                    ) : (
                      <div>No Documents</div>
                    )}
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WorkOrders;

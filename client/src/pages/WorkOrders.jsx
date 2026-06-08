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
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Loading from "@/components/web/Loading";

const WorkOrders = () => {
  const { workOrders, loading } = useWorkOrder();

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
            <TableHead className="text-white font-semibold">Images</TableHead>
            <TableHead className="text-white font-semibold">Pdfs</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workOrders.length > 0 ? (
            workOrders?.map((item, index) => (
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
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-purple-300 hover:border-purple-400 hover:bg-purple-50"
                      >
                        Images
                      </Button>
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
                      <Button
                        variant="outline"
                        className="border-purple-300 hover:border-purple-400 hover:bg-purple-50"
                      >
                        Pdfs
                      </Button>
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
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="h-44 text-center text-lg">
                <span className="italic">
                  Looks like you have no work orders !
                </span>{" "}
                🤔
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default WorkOrders;

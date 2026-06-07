import TableData from "@/components/web/TableData";
import { Chart } from "@/components/web/Chart";
import StatusCard from "@/components/web/StatusCard";
import { CircleCheck, File, Handshake, PackagePlus } from "lucide-react";
import React, { Activity } from "react";

import useWorkOrder from "@/hooks/useWorkOrder";
import Loading from "@/components/web/Loading";

const Home = () => {
  const { workOrders, loading } = useWorkOrder();

  const status = [
    {
      title: "Total Work Orders",
      value: workOrders.length,
      icon: <File size={40} />,
    },
    {
      title: "Created",
      value: workOrders.filter((wo) => wo.status === "created").length,
      icon: <PackagePlus size={40} />,
    },
    {
      title: "Assigned",
      value: workOrders.filter((wo) => wo.status === "assigned").length,
      icon: <Handshake size={40} />,
    },
    {
      title: "In Progress",
      value: workOrders.filter((wo) => wo.status === "in_progress").length,
      icon: <Activity size={40} />,
    },
    {
      title: "Completed",
      value: workOrders.filter((wo) => wo.status === "completed").length,
      icon: <CircleCheck size={40} />,
    },
  ];

  if (loading) return <Loading />;
  return (
    <div className="p-5">
      <div className="grid grid-cols-2 gap-2 md:gap-6 md:grid-cols-5">
        {status.map((s, i) => (
          <StatusCard key={i} data={s} />
        ))}
      </div>
      <div className="mt-5 flex gap-5 justify-center flex-wrap">
        <div className="w-full md:w-[45%]">
          <Chart />
        </div>
        <div className="w-full md:w-[45%]">
          <TableData />
        </div>
      </div>
    </div>
  );
};

export default Home;

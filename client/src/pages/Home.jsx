import { Chart } from "@/components/web/Chart";
import StatusCard from "@/components/web/StatusCard";
import { CircleCheck, File, Handshake, PackagePlus } from "lucide-react";
import React, { Activity, useState } from "react";

const Home = () => {
  const status = [
    {
      title: "Total Work Orders",
      value: "123",
      icon: <File size={40} />,
    },
    {
      title: "Created",
      value: "110",
      icon: <PackagePlus size={40} />,
    },
    {
      title: "Assigned",
      value: "90",
      icon: <Handshake size={40} />,
    },
    {
      title: "In Progress",
      value: "50",
      icon: <Activity size={40} />,
    },
    {
      title: "Completed",
      value: "10",
      icon: <CircleCheck size={40} />,
    },
  ];
  return (
    <div className="p-5">
      <div className="grid grid-cols-2 gap-2 md:gap-6 md:grid-cols-5">
        {status.map((s, i) => (
          <StatusCard key={i} data={s} />
        ))}
      </div>
      <div className="max-w-[50%] mx-auto mt-5">
        <Chart />
        <div></div>
      </div>
    </div>
  );
};

export default Home;

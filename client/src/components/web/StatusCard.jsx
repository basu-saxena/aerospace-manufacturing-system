import { File } from "lucide-react";
import React from "react";

const StatusCard = ({ data }) => {
  const { title, value, icon } = data;
  return (
    <div className="px-3 py-5 bg-purple-200 shadow-sm shadow-purple-400 flex justify-between items-center rounded-md">
      <div>
        <h3 className="font-bold text-xs md:text-lg mb-5">{title}</h3>
        <span className="font-bold text-lg md:text-3xl">{value}</span>
        <p className="text-sm">work orders</p>
      </div>
      <div className="mr-5">{icon}</div>
    </div>
  );
};

export default StatusCard;

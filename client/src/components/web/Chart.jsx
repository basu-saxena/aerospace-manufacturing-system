import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useWorkOrder from "@/hooks/useWorkOrder";

export function Chart() {
  const { workOrders, loading } = useWorkOrder();
  console.log(workOrders);

  const chartData = [
    {
      department: "CNC",
      orders: workOrders.filter((wo) => wo.department.name === "CNC").length,
    },
    {
      department: "Composite",
      orders: workOrders.filter((wo) => wo.department.name === "Composite")
        .length,
    },
    {
      department: "Assembly",
      orders: workOrders.filter((wo) => wo.department.name === "Assembly")
        .length,
    },
    {
      department: "Quality",
      orders: workOrders.filter((wo) => wo.department.name === "Quality")
        .length,
    },
  ];

  const chartConfig = {
    orders: {
      label: "Orders",
      color: "#E9D4FF",
    },
  };
  if (loading) <div>loading</div>;
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] w-full border rounded-md"
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="department"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="orders"
          fill="var(--color-orders)"
          radius={4}
          barSize={100}
        />
      </BarChart>
    </ChartContainer>
  );
}

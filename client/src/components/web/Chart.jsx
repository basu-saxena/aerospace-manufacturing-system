import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { department: "CNC", orders: 80 },
  { department: "Composite", orders: 200 },
  { department: "Assembly", orders: 120 },
  { department: "Quality", orders: 190 },
];

const chartConfig = {
  orders: {
    label: "Orders",
    color: "#E9D4FF",
  },
};

export function Chart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
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

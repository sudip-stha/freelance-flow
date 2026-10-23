"use client";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import revenueChartData from "../data/revenueChart.data";
import CustomTooltip from "./CustomTooltip";

const RevenueChart = () => {
  return (
    <ComposedChart data={revenueChartData} width={800} height={300}>
      <defs>
        <linearGradient id="revenueGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#004d43" stopOpacity={1} />
          <stop offset="50%" stopColor="#004d43" stopOpacity={0.6} />
          <stop offset="100%" stopColor="#004d43" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey="month"
        tickLine={false}
        tick={{
          fontFamily: "var(--font-inter)",
          fontSize: 12,
          fontWeight: 500,
        }}
      />
      <YAxis
        dataKey="value"
        domain={[0, 10000]}
        ticks={[0, 2500, 5000, 7500, 10000]}
        tickFormatter={(value) => `$${value / 1000}k`}
        axisLine={false}
        tickLine={false}
        tick={{
          fontFamily: "var(--font-inter)",
          fontSize: 12,
          fontWeight: 500,
        }}
      />
      <Tooltip content={CustomTooltip} />
      <Area
        dataKey="value"
        type="natural"
        stroke="none"
        fill="url(#revenueGradient)"
        fillOpacity={0.2}
        isAnimationActive={false}
        tooltipType="none"
      />
      <Line
        dataKey="value"
        type="natural"
        strokeWidth={3}
        dot={false}
        stroke="#004d43"
      />
    </ComposedChart>
  );
};

export default RevenueChart;

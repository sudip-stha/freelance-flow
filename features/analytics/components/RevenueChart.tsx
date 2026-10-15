"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import revenueChartData from "../data/revenueChart.data";

const RevenueChart = () => {
  return (
    <LineChart data={revenueChartData} width={800} height={300}>
      <CartesianGrid />
      <XAxis dataKey="month" />
      <YAxis dataKey="value" />
      <Tooltip />
      <Line dataKey="value" />
    </LineChart>
  );
};

export default RevenueChart;

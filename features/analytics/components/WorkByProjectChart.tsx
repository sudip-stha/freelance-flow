"use client";
import React from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import workByProjectData from "../data/workByProject.data";

const WorkByProjectChart = () => {
  return (
    <PieChart width="100%" height="100%">
      <Pie
        data={workByProjectData}
        dataKey="revenue"
        nameKey="revenue"
        cx={"50%"}
        cy={"50%"}
        innerRadius={"56%"}
        outerRadius={"80%"}
       paddingAngle={3}
      >
        <Cell fill={"#000"} />
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default WorkByProjectChart;

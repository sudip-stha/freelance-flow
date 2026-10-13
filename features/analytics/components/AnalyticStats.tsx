import React from "react";
import analyticStatData from "../data/analyticStat.data";
import StatCard from "./ui/StatCard";

const AnalyticStats = () => {
  return (
    <div className="flex gap-3">
      {analyticStatData.map((data) => {
        return <StatCard key={data.id} data={data} />;
      })}
    </div>
  );
};

export default AnalyticStats;

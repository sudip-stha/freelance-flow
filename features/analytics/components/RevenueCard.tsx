import React from "react";
import RevenueChart from "./RevenueChart";

const RevenueCard = () => {
  return (
    <div className="flex flex-col gap-5 bg-card-bg border-2 border-border p-6 rounded-2xl">
      <div className="flex flex-col gap-2">
        <h3 className="font-geist font-semibold text-xl">Revenue & rhythm</h3>
        <span className="font-inter text-xs text-tertiary-text">
          A six-month view of your studio health
        </span>
      </div>
      <RevenueChart />
    </div>
  );
};

export default RevenueCard;
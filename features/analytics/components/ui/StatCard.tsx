import React from "react";
import { StatCardProps } from "../../type/data";

const StatCard = ({ data }: StatCardProps) => {
  return (
    <div className="bg-card-bg w-[24.3rem] border-2 border-border flex flex-col gap-3 p-4 rounded-2xl font-geist">
      <div className="flex justify-between">
        <h4 className="font-semibold text-xs text-tertiary-text">
          {data.label}
        </h4>
      </div>
      <div className=" flex justify-between items-end">
        <span className="text-2xl font-semibold text-primary-text">
          {data.id === "revenue-this-month" ||
          data.id === "average-project-value"
            ? "$"
            : ""}
          {data.value}
          {data.id === "project-completion-rate" ? "%" : ""}
        </span>
        {data.id === "revenue-this-month" ? (
          <span
            className={`${data.trend === "up" ? "text-accent" : "text-red-500"} text-xs font-medium`}
          >
            +{data.change} % {data.changeLabel}
          </span>
        ) : (
          ""
        )}
      </div>
      <span className="text-xs font-medium text-tertiary-text">
        {data.supportingText}
      </span>
    </div>
  );
};

export default StatCard;

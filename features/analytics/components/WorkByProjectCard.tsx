import React from "react";
import WorkByProjectChart from "./WorkByProjectChart";
import WorkByProjectData from "./WorkByProjectData";

const WorkByProjectCard = () => {
  return (
    <div className="min-w-[20.2rem] flex flex-col bg-card-bg border-2 border-border p-6 rounded-2xl">
      <div className="flex flex-col gap-2">
        <h3 className="font-geist font-semibold text-xl">Work by project</h3>
        <span className="font-inter text-xs text-tertiary-text">
          Spend across your current roster
        </span>
      </div>
      <WorkByProjectChart />
      <WorkByProjectData />
    </div>
  );
};

export default WorkByProjectCard;

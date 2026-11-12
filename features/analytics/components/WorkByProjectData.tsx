import React from "react";
import workByProjectData from "../data/workByProject.data";

const WorkByProjectData = () => {
  return (
    <div className="flex flex-col gap-3">
      {workByProjectData.map((data) => {
        return (
          <div
            key={data.company}
            className="flex justify-between font-inter text-xs text-tertiary-text"
          >
            <div className="flex gap-2 items-center">
              <span className="bg-accent w-2 h-2 rounded-full"></span>
              <span>{data.company}</span>
            </div>
            <span>${data.revenue}</span>
          </div>
        );
      })}
    </div>
  );
};

export default WorkByProjectData;

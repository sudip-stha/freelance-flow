import React from "react";
import projectList from "../../data/projectInMotion.data";
import { Progress } from "@/components/ui/progress";

const ProjectProgressList = () => {
  return (
    <div className="flex flex-col gap-6">
      {projectList.map((data) => {
        return (
          <div key={data.id} className="flex flex-col gap-3">
            <div className="flex justify-between font-inter">
              <div className="flex gap-2 items-center">
                <span className="text-lg font-semibold text-primary-text">{data.name}</span>
                <span className="text-[10px] bg-accent px-3 py-1 rounded-2xl text-secondary-text">{data.company}</span>
              </div>
              <span className="text-tertiary-text text-sm">{data.taskCompletion}%</span>
            </div>
            <Progress value={data.taskCompletion} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectProgressList;

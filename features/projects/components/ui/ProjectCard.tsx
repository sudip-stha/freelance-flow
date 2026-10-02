import React from "react";
import { Project } from "../../type/data";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

const ProjectCard = (project: Project) => {
  return (
    <div className="group w-95 bg-card-bg border-2 p-4 flex flex-col gap-5 rounded-xl shadow-md transition-all hover:-translate-y-1.5">
      <div className="flex justify-between">
        <span className="bg-accent w-2 h-2 rounded-full"></span>
        <div className="flex gap-2">
          <button className="px-4 py-3 rounded-xl hover:bg-gray-300/20 opacity-0 group-hover:opacity-100">
            <Image
              src={"/icons/horizontalDotIcon.svg"}
              alt=""
              width={14}
              height={14}
            />
          </button>
          <button className="px-4 py-3 rounded-xl hover:bg-gray-300/20 opacity-0 group-hover:opacity-100">
            <Image
              src={"/icons/deleteIcon.svg"}
              alt=""
              width={14}
              height={14}
            />
          </button>
        </div>
      </div>
      <div className="flex gap-1 flex-col">
        <h3 className="font-geist font-bold text-primary-text text-xl cursor-pointer">
          {project.title}
        </h3>
        <span className="font-inter font-semibold text-[12px] text-tertiary-text cursor-pointer">
          {project.client}
        </span>
      </div>
      <p className="font-inter font-semibold text-[12px] text-tertiary-text cursor-pointer">
        {project.description}
      </p>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between font-inter text-tertiary-text text-[12px] font-semibold">
          <span>{project.status}</span>
          <span>{project.progress}% COMPLETE</span>
        </div>
        <Progress value={project.progress} />
      </div>
      <hr className="border" />
      <div className="flex justify-between items-center font-inter text-[11px] text-tertiary-text font-medium">
        <div className="flex gap-2 items-center">
          <Image
            src={"/icons/calendarIcon.svg"}
            alt=""
            width={14}
            height={14}
          />{" "}
          {project.deadline}
        </div>
        <span>${project.budget}</span>
      </div>
    </div>
  );
};

export default ProjectCard;

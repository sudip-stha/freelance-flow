import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectProgressList from "./ui/ProjectProgressList";

const ProjectsInMotion = () => {
  return (
    <div className="flex flex-col gap-8 bg-card-bg border-2 border-border p-6 rounded-2xl">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h3 className="font-geist font-semibold text-xl">
            Projects in motion
          </h3>
          <p className="font-inter text-xs text-tertiary-text">
            A quick read on your active work
          </p>
        </div>
        <Link
          href="/projects"
          className="flex font-inter text-[12px] font-bold text-active-text"
        >
          See all
          <Image
            src={"/icons/arrowTopRightIcon.svg"}
            alt=""
            width={18}
            height={18}
          />
        </Link>
      </div>
      <ProjectProgressList />
    </div>
  );
};

export default ProjectsInMotion;

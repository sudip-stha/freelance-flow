import React from "react";
import { Project } from "../../type/data";
import Image from "next/image";

const ProjectCard = (project: Project) => {
  return (
    <div>
      <div className="flex gap-3 flex-col">
        <h3>{project.title}</h3>
        <span>{project.client}</span>
      </div>
      <p>{project.description}</p>
      <div>
        <div>
          <span>{project.status}</span>
          <span>{project.progress}% COMPLETE</span>
        </div>
        <progress value={project.progress} />
      </div>
      <div>
        <div>
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

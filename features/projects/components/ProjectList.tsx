import React from "react";
import projects from "../data/projects.data";
import ProjectCard from "./ui/ProjectCard";

const ProjectList = () => {
  return (
    <div className="flex gap-6 flex-wrap">
      {projects.map((project) => {
        return <ProjectCard key={project.id} {...project} />;
      })}
    </div>
  );
};

export default ProjectList;

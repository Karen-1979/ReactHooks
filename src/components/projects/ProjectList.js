import React from "react";
import ProjectSummari from "./ProjectSummari";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              <ProjectSummari project={project} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;

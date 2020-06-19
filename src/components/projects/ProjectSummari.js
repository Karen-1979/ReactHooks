import React from "react";
import moment from "moment";


const ProjectSummari = ({ project }) => {
  console.log(project)
  return (
    <div className='shadew'>
      <div className="center card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">

          <span className="card-title">{project.title}</span>
          <img src={project.photoURL} alt='' width="50%" height='50%'/>
          <p>
            Posted by {project.authorFirstName} {project.authorLastName}
          </p>
          <p className="grey-text">
            {moment(project.createdAt.toDate()).calendar()}
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummari;

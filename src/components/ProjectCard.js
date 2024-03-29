import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ project, onClick }) => {
  if (!project) return null; // Add a null check for the project prop

   // Destructure project object

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={onClick}>
        <img src={"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/"+project.image.public_id} alt="Project" /> {/* Use imgUrl from destructured project */}
        <div className="proj-txtx">
          <h4>{project.tittle}</h4> {/* Use title from destructured project */}
          <span>{project.description}</span> {/* Use description from destructured project */}
        </div>
      </div>
    </Col>
  );
};

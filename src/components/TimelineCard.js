import React from 'react';
import { Col } from 'react-bootstrap';

export const TimelineCard = ({ project, onClick }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={onClick}>
        <img src={"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706289470834-siro83"} alt="Project" />
        <div className="proj-txtx">
          <h4>Company Name:{project.company_name}</h4>
          <h4>Job Title:{project.jobTitle}</h4>
          <h4>Location:{project.jobLocation}</h4>
          <span>{project.summary}</span>
        </div>
      </div>
    </Col>
  );
};

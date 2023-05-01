import React from 'react';
import { Col } from "react-bootstrap";


const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={12} md={4}>
      <div className="proj-imgbx ">
        <img src={imgUrl} />
        <div className="proj-txtx p-2">
          <h4 className='text-white'>{title}</h4>
          <span className='fs-5 fw-bold text-white'>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard;
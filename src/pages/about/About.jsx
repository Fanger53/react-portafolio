import React from 'react';
import './about.scss';
import {Button, Col, Container, Row} from 'react-bootstrap';


const About = () => {
  return (
    <Container  className='border about '>
      <h2>About Me</h2>
      <p>Get to Know Me</p>
      <div className='d-flex justify-content-center '>
      <Row className=' about__section '>
        <Col sm={12} md={6}>
          <img src="" alt="imagen about Me" />
        </Col>  
        <Col sm={12} md={6}>
          <h4>who am I?</h4>
          <p>
            I’m a Full-Stack Software Developer from Colombia with experience in Html, Scss, JavaScript, Ruby, Ruby on Rails,React and more technologies.
            I started my professional career in sales, but always in the background learning about the world of programming until 2019 now I dedicate myself full time to it and I really enjoy bringing the ideas I had in mind to live.

            I like search  solutions to problems in the real world and the software is a powerful tool to change the paradigms of people
          </p>
          <Button>Look My Cv</Button>
        </Col>  
      </Row>
      </div>
    </Container>
  )
}

export default About
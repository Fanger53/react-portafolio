import React from 'react';
import './about.scss';
import {Button, Col, Container, Row} from 'react-bootstrap';
import personal from '../../assets/img/personal.jpg';

const About = () => {
  return (
    <section className=' about '>
      <Container  >
        <h2 className='mt-5'>About Me</h2>
        <p className='bolder'>Get to Know Me</p>
        <div className='d-flex justify-content-center '>
          <Row className=' about__section '>
            <Col sm={12} md={6}>
              <img src={personal} className='about__img' alt="imagen about Me" />
            </Col>  
            <Col xs={12} bsm={12} md={6}>
              <h4>who am I?</h4>
              <p>
                I’m a Full-Stack Software Developer from Colombia with experience in Html, Scss, JavaScript, Ruby, Ruby on Rails, React, and more technologies.

                I started my professional career in sales, but always in the background learning about the world of programming, since 2019  I dedicate myself full-time to it and I enjoy bringing the ideas I had in mind to life.

                I like search  solutions to problems in the real world and the software is a powerful tool to change the paradigms of people
              </p>
              <Button href='https://docs.google.com/document/d/1OeXjqW4_rsZKXH2-wvg0bRQXq7d7lEC7J7o6KHvd5OE/edit?usp=sharing' target='_blank' className="about__button">Look My Cv</Button>
            </Col>  
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default About
import React from 'react';
import './home.scss';
import {BsFillArrowRightSquareFill} from 'react-icons/bs';
import {Button, Col, Container, Row} from 'react-bootstrap';
import ReactTyped from 'react-typed';
import astronaut from '../../assets/img/astronaut.png';
import ParticleBackground from '../../components/skyAnimation/SkyAnimation';

const Home = () => {
  

  return (
    <section id='home'>
      <ParticleBackground />
      <Container className=' d-flex justify-content-center home__cards'>
        <Row className='align-content-center'>
        
          <Col xs={12}  className=' card'>
            <h2 className='typed-text'>Leonardo Castillo R</h2>
            <p className='typed-text'>I'm  
              <ReactTyped
                className=' typed-text'
                style={{marginLeft: '5px'}}
                loop
                typeSpeed={130}
                backSpeed={80}
                strings={[' a Full-Stack Developer', ' a Freelancer', ' a Code Lover', ' a Mountain Biker', ' Leo']}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </p>
            <Button className='font-weight-700' style={{backgroundColor: "transparent", color: "whitesmoke", width: "90%"}} href='https://www.linkedin.com/in/david-castillo-r/'target="_blank" >
              know More <BsFillArrowRightSquareFill/>
            </Button>
          </Col>
          <img src={astronaut} alt="astronaut" className='home-img'/>
        </Row>
      </Container>
    </section>
  )
}

export default Home
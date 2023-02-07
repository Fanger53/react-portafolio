import React from 'react';
import './home.scss';
import {BsFillArrowRightSquareFill} from 'react-icons/bs';
import {Button, Col, Container, Row} from 'react-bootstrap';
import ReactTyped from 'react-typed';



const Home = () => {
  return (
    <section id='home'>
      <Container className=' d-flex justify-content-center home__cards'>
        <Row className='align-content-center'>
          <Col xs={12}  className=' card'>
            <h2>Leonardo Castillo</h2>
            <p>Im  
              <ReactTyped
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
            <Button variant={'transparent'} style={{backgroundColor: "transparent", color: "whitesmoke"}} >
              know More <BsFillArrowRightSquareFill/>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home
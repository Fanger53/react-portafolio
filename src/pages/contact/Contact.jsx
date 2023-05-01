import React from 'react'
import './contact.scss';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import 'animate.css';
import contactImg from '../../assets/img/contact-img.svg';




const Contact = () => {
  return (
    <section className='contact'>
      <Container>
        <div className="contact__container">
          <Row className=' p-5'>
            <Col lg={6}>
              <img src={contactImg} alt="contact img" className='contact_img'/>
            </Col>
            <Col  sm={12} lg={5} className='ml-5'>
            <Form>
              <div className="d-flex ">
                <Form.Group>
                  <Form.Label className='font-weight-700'>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>
                <Form.Group className='ml-5 font-weight-700'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder=" Enter Last Name" />
                </Form.Group>
              </div>
              <Form.Group className="mb-3 font-weight-700" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              

              <Form.Group className="mb-3 font-weight-700" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Message" />
              </Form.Group>
              <Button variant="primary" type="submit" className='formButton formLabel'>
                Submit
              </Button>
            </Form>

            </Col>
          </Row>
        </div>
      </Container>
      <div className='footer  '></div>
    </section>
  )
}

export default Contact
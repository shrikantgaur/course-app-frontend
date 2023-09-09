import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <section className="contact">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Contact Us</h2>
            <p>If you have questions, feel free to reach out!</p>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AboutUs() {
  return (
    <section className="about-us">
      <Container>
        <Row>
          <Col md={6}>
            <h2>About Us</h2>
            <p>Learn about our mission and values.</p>
          </Col>
          <Col md={6}>
            <img
              src={`./images/home//dummy.png`}
              alt="About Us"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;

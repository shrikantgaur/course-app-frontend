import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Testimonials({ testimonials }) {
  return (
    <section className="testimonials">
      <Container>
        <h2 className="text-center mb-4">What Our Students Say</h2>
        <Row>
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} xs={12} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Text>{testimonial.text}</Card.Text>
                  <Card.Footer>
                    <small className="text-muted">- {testimonial.author}</small>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;

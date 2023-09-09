import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function FeaturedCourses({ courses }) {
  return (
    <section className="featured-courses">
      <Container>
        <h2 className="text-center mb-4">Featured Courses</h2>
        <Row>
          {courses.map((course) => (
            <Col key={course.id} xs={12} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={course.image} alt={course.title} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Button variant="primary">Enroll Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FeaturedCourses;

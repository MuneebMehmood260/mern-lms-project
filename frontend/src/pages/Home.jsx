import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaChalkboardTeacher, FaChartLine } from 'react-icons/fa';
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto">
              <h1 className="display-4 fw-bold mb-4">Learn Anything, Anytime</h1>
              <p className="lead mb-4">Join thousands of students learning from expert instructors with our professional Learning Management System.</p>
              <Button as={Link} to="/courses" size="lg" className="me-3">
                Browse Courses
              </Button>
              <Button as={Link} to="/about" variant="outline-light" size="lg">How it Works</Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Features */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Why Choose Our LMS?</h2>
          <Row>
            <Col md={4} className="text-center mb-4">
              <FaGraduationCap size={60} className="text-primary mb-3" />
              <h4>Expert Instructors</h4>
              <p>Learn from industry professionals with years of experience.</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <FaChalkboardTeacher size={60} className="text-primary mb-3" />
              <h4>Interactive Lessons</h4>
              <p>Engaging video content, quizzes, and hands-on projects.</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <FaChartLine size={60} className="text-primary mb-3" />
              <h4>Track Progress</h4>
              <p>Monitor your learning journey and celebrate milestones.</p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* CTA */}
      <section className="bg-light py-5">
        <Container className="text-center">
          <h2>Ready to Start Learning?</h2>
          <p className="lead">Join today and unlock your potential</p>
          <Button as={Link} to="/courses" size="lg" variant="primary">
            Get Started
          </Button>
        </Container>
      </section>
    </>
  );
};
export default Home;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBook, FaUsers, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={8}>
          <h1 className="mb-4">About Our Learning Management System</h1>
          <p className="lead">
            Our LMS is a full-featured platform built with modern MERN stack technologies, designed to provide seamless learning experience for students, instructors, and administrators.
          </p> 
          <h3 className="mt-5 mb-3">Key Features</h3>
          <ul className="list-unstyled">
            <li className="mb-3 p-3 border-start border-5 border-primary">
              <FaCheckCircle className="text-primary me-3" />
              Role-based dashboards for Students, Instructors, and Admins
            </li>
            <li className="mb-3 p-3 border-start border-5 border-primary">
              <FaCheckCircle className="text-primary me-3" />
              Complete course lifecycle management
            </li>
            <li className="mb-3 p-3 border-start border-5 border-primary">
              <FaCheckCircle className="text-primary me-3" />
              JWT authentication with role-based authorization
            </li>
            <li className="mb-3 p-3 border-start border-5 border-primary">
              <FaCheckCircle className="text-primary me-3" />
              MongoDB with proper schema design and relationships
            </li>
          </ul>
        </Col>
        <Col md={4}>
          <div className="card h-100">
            <div className="card-body text-center">
              <FaBook size={80} className="text-primary mb-3" />
              <h4>Professional MERN Stack</h4>
              <p>MongoDB | Express | React | Node.js</p>
              <ul className="list-unstyled">
                <li><FaUsers /> 3 User Roles</li>
                <li>✅ Full CRUD Operations</li>
                <li>🔐 JWT Security</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
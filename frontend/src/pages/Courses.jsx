import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Spinner } from 'react-bootstrap';
import { courseAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { FaDollarSign } from 'react-icons/fa';
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await courseAPI.getAll();
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);
  if (loading) {
    return (
      <Container className="d-flex justify-content-center py-5">
        <Spinner animation="border" />
      </Container>
    );
  }
  return (
    <Container className="py-5">
      <h1 className="mb-5 text-center">All Courses</h1>
      <Row>
        {courses.length === 0 ? (
          <Col>
            <h4 className="text-center text-muted py-5">No courses available. <Link to="/instructor">Create one!</Link></h4>
          </Col>
        ) : (
          courses.map((course) => (
            <Col md={6} lg={4} key={course._id} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Badge bg="primary" className="mb-2">{course.category}</Badge>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description.substring(0, 100)}...</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">by {course.instructor?.name}</small>
                    {course.price > 0 ? (
                      <div className="d-flex align-items-center">
                        <FaDollarSign className="me-1" />
                        {course.price}
                      </div>
                    ) : (
                      <Badge bg="success">Free</Badge>
                    )}
                  </div>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button as={Link} to={`/courses/${course._id}`} variant="primary" className="w-100">
                    View Details
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};
export default Courses;
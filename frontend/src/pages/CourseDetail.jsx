import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, Alert } from 'react-bootstrap';
import { courseAPI, enrollAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { FaVideo, FaDollarSign } from 'react-icons/fa';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolled, setEnrolled] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await courseAPI.getById(id);
        setCourse(response.data);
      } catch (error) {
        setError('Course not found');
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  const handleEnroll = async () => {
    try {
      await enrollAPI.enroll(id);
      setEnrolled(true);
    } catch (error) {
      setError('Enrollment failed');
    }
  };
  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error || !course) return <Alert variant="danger">Course not found</Alert>;
  return (
    <Container className="py-5">
      <Row>
        <Col md={8}>
          <Badge bg="primary" className="mb-3">{course.category}</Badge>
          <h1>{course.title}</h1>
          <p className="lead">{course.description}</p>
          <div className="mb-4 p-3 bg-light rounded">
            <h5><FaVideo className="me-2" />Lessons</h5>
            {course.lessons?.length > 0 ? (
              <ul className="list-unstyled">
                {course.lessons.map((lesson, index) => (
                  <li key={index} className="mb-2 p-2 bg-white rounded shadow-sm">
                    📹 {lesson.title} ({lesson.duration || 'N/A'} min)
                  </li>
                ))}
              </ul>
            ) : (
              <p>No lessons available yet.</p>
            )}
          </div>
          {!user ? (
            <Link to="/login">
              <Button variant="primary" size="lg">Login to Enroll</Button>
            </Link>
          ) : enrolled ? (
            <Alert variant="success">
              ✅ Successfully enrolled! Check your dashboard.
            </Alert>
          ) : (
            <Button onClick={handleEnroll} variant="success" size="lg">
              {course.price > 0 ? (
                <>
                  <FaDollarSign className="me-1" />
                  Enroll for ${course.price}
                </>
              ) : (
                'Enroll for Free'
              )}
            </Button>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h5>Instructor</h5>
              <p>{course.instructor?.name}</p>
              <hr />
              <h5>Price</h5>
              <h3 className="text-success">${course.price || 'Free'}</h3>
              <hr />
              <h5>Category</h5>
              <Badge bg="info">{course.category}</Badge>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default CourseDetail;
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { enrollAPI, courseAPI } from '../services/api';
import { FaBookOpen } from 'react-icons/fa';

const StudentDashboard = () => {
  const [myCourses, setMyCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyCourses = async () => {
      try {
        const response = await enrollAPI.myCourses();
        setMyCourses(response.data);
      } catch (error) {
        console.error('Error fetching my courses:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMyCourses();
  }, []);

  return (
    <Container className="py-5">
      <h1 className="mb-5"><FaBookOpen className="me-2" />My Courses</h1>
      {loading ? (
        <p>Loading your courses...</p>
      ) : myCourses.length === 0 ? (
        <div className="text-center py-5">
          <h4>No enrolled courses yet</h4>
          <p>Browse our courses and start learning today!</p>
        </div>
      ) : (
        <Row>
          {myCourses.map((course) => (
            <Col md={6} lg={4} key={course._id} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Badge bg="info">{course.category}</Badge>
                  <div className="mt-3">
                    <Button variant="primary" size="sm">
                      Continue Learning ({course.progress || 0}%)
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default StudentDashboard;
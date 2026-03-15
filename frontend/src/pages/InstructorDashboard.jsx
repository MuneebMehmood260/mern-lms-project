import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Container, Row, Col, Button, Form, Modal, Card, Badge } from 'react-bootstrap';
import { courseAPI } from '../services/api';

const InstructorDashboard = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Web Development',
    price: 0
  });
  const { user } = useAuth();
  useEffect(() => {
    fetchCourses();
  }, []);
  const fetchCourses = async () => {
    try {
      const response = await courseAPI.getAll();
      const myCourses = response.data.filter(course => course.instructor._id === user.id);
      setCourses(myCourses);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleCreateCourse = async (e) => {
    e.preventDefault();
    try {
      await courseAPI.create(formData);
      setShowCreateModal(false);
      setFormData({ title: '', description: '', category: 'Web Development', price: 0 });
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col>
          <h1>My Courses</h1>
          <Button onClick={() => setShowCreateModal(true)} variant="primary">
            + Create New Course
          </Button>
        </Col>
      </Row>
      {loading ? (
        <p>Loading courses...</p>
      ) : (
        <Row>
          {courses.map((course) => (
            <Col md={6} lg={4} key={course._id} className="mb-4">
              <Card>
                <Card.Body>
                  <Badge bg="warning">{course.category}</Badge>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <div className="d-flex gap-2">
                    <Button variant="warning" size="sm">Edit</Button>
                    <Button variant="danger" size="sm">Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      {/* Create Course Modal */}
      <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreateCourse}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option>Web Development</option>
                <option>Data Science</option>
                <option>Mobile App</option>
                <option>Business</option>
                <option>Design</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price ($)</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: parseInt(e.target.value) || 0})}
              />
            </Form.Group>
            <Button type="submit" className="w-100">Create Course</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
export default InstructorDashboard;
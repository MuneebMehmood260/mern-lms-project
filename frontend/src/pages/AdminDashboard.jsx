import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Badge, Card } from 'react-bootstrap';
import { userAPI, courseAPI } from '../services/api';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
    fetchCourses();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await userAPI.getAll();
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await courseAPI.getAll();
      setCourses(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await userAPI.delete(id);
        fetchUsers();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDeleteCourse = async (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        await courseAPI.delete(id);
        fetchCourses();
      } catch (error) {
        console.error('Error deleting course:', error);
        alert('Failed to delete course');
      }
    }
  };

  if (loading) return <div className="text-center py-5">Loading...</div>;

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1>Admin Dashboard</h1>
          <Row className="mb-5">
            <Col md={6}>
              <Card>
                <Card.Body>
                  <h5>Total Users: {users.length}</h5>
                  <h5>Total Courses: {courses.length}</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <h3>Manage Users</h3>
          <Table striped bordered hover responsive className="mb-5">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Badge bg={user.role === 'admin' ? 'danger' : user.role === 'instructor' ? 'warning' : 'info'}>
                      {user.role}
                    </Badge>
                  </td>
                  <td>
                    <Button 
                      variant="danger" 
                      size="sm" 
                      onClick={() => handleDeleteUser(user._id)}
                      disabled={user.role === 'admin'}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h3>Manage Courses</h3>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Title</th>
                <th>Instructor</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course._id}>
                  <td>{course.title}</td>
                  <td>{course.instructor?.name}</td>
                  <td>{course.category}</td>
                  <td>${course.price || 'Free'}</td>
                  <td>
                    <Button variant="warning" size="sm" className="me-1" disabled>Edit</Button>
                    <Button 
                      variant="danger" 
                      size="sm" 
                      onClick={() => handleDeleteCourse(course._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;


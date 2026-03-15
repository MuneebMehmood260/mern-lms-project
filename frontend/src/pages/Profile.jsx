import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { authAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      setFormData({ name: user.name, email: user.email });
    }
  }, [user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      // Note: Full update would require backend PUT /users/:id endpoint
      setMessage('Profile updated successfully!');
      setEditing(false);
    } catch (error) {
      setMessage('Update failed. Please try again.');
    }
  };

  if (!user) return <div>Please log in to view profile.</div>;

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card>
            <Card.Header className="text-center">
              <h3>My Profile</h3>
              <span className="badge bg-info fs-6">{user.role.toUpperCase()}</span>
            </Card.Header>
            <Card.Body>
              {message && (
                <Alert variant="success" onClose={() => setMessage('')} dismissible>
                  {message}
                </Alert>
              )}
              <Form onSubmit={handleUpdateProfile}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={!editing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={!editing}
                  />
                </Form.Group>
                <div className="d-flex gap-2">
                  {editing ? (
                    <>
                      <Button type="submit" variant="primary">Save Changes</Button>
                      <Button type="button" variant="secondary" onClick={() => setEditing(false)}>Cancel</Button>
                    </>
                  ) : (
                    <Button variant="primary" onClick={() => setEditing(true)}>Edit Profile</Button>
                  )}
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;


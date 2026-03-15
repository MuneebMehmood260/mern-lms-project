import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
});
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});
export const authAPI = {
  register: (data) => API.post('/auth/register', data),
  login: (data) => API.post('/auth/login', data),
};
export const courseAPI = {
  getAll: () => API.get('/courses'),
  getById: (id) => API.get(`/courses/${id}`),
  create: (data) => API.post('/courses', data),
  update: (id, data) => API.put(`/courses/${id}`, data),
  delete: (id) => API.delete(`/courses/${id}`),
};

export const userAPI = {
  getAll: () => API.get('/users'),
  delete: (id) => API.delete(`/users/${id}`),
};

export const enrollAPI = {
  enroll: (courseId) => API.post(`/enroll/${courseId}`),
  myCourses: () => API.get('/enroll/my-courses'),
};

export default API;
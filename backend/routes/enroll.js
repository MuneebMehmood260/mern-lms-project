const express = require('express');
const { enrollCourse, getMyCourses } = require('../controllers/enrollController');
const { protect, authorize } = require('../middleware/auth');
const router = express.Router();
router.post('/:courseId', protect, authorize('student'), enrollCourse);
router.get('/my-courses', protect, getMyCourses);
module.exports = router;
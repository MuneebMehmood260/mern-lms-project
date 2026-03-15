const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');
const { protect } = require('../middleware/auth');
const enrollCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const enrollment = await Enrollment.findOne({ 
      student: req.user.id, 
      course: courseId 
    });

    if (enrollment) {
      return res.status(400).json({ message: 'Already enrolled' });
    }

    const newEnrollment = await Enrollment.create({
      student: req.user.id,
      course: courseId
    });

    res.status(201).json(newEnrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getMyCourses = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ student: req.user.id })
      .populate('course', 'title description price instructor category')
      .populate('course.instructor', 'name');
    
    const courses = enrollments.map(enrollment => ({
      ...enrollment.course._doc,
      progress: enrollment.progress
    }));
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { enrollCourse, getMyCourses };
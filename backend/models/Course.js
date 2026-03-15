const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a course title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Web Development', 'Data Science', 'Mobile App', 'Business', 'Design']
  },
  price: {
    type: Number,
    default: 0
  },
  lessons: [{
    title: String,
    videoUrl: String,
    content: String,
    duration: Number
  }]
}, { timestamps: true });
module.exports = mongoose.model('Course', courseSchema);
const express = require('express');
const {
  getAllTeachers,
  getTeacherById,
  createTeacher
} = require('../controllers/teacherController');

const router = express.Router();

router.get('/', getAllTeachers);
router.get('/:id', getTeacherById);
router.post('/', createTeacher);

module.exports = router;

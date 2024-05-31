const express = require('express');
const {
  getAllStudents,
  getStudentById,
  createStudent
} = require('../controllers/studentController');

const router = express.Router();

router.get('/students', getAllStudents);
router.get('/students:id', getStudentById);
router.post('/students', createStudent);

module.exports = router;

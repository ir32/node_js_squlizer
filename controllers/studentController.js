const Student = require('../models/student');

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).send('Error fetching students');
  }
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).send('Error fetching student');
  }
};

const createStudent = async (req, res) => {
  const { name, age, email, enrollment_date } = req.body;
  try {
    const newStudent = await Student.create({ name, age, email, enrollment_date });
    res.status(201).send('Student created successfully');
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).send('Error creating student');
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent
};

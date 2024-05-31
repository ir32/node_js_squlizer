const Teacher = require('../models/teacher');

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    res.json(teachers);
  } catch (error) {
    console.error('Error fetching teachers:', error);
    res.status(500).send('Error fetching teachers');
  }
};

const getTeacherById = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await Teacher.findByPk(id);
    if (!teacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }
    res.json(teacher);
  } catch (error) {
    console.error('Error fetching teacher:', error);
    res.status(500).send('Error fetching teacher');
  }
};

const createTeacher = async (req, res) => {
  const { name, subject } = req.body;
  try {
    const newTeacher = await Teacher.create({ name, subject });
    res.status(201).send('Teacher created successfully');
  } catch (error) {
    console.error('Error creating teacher:', error);
    res.status(500).send('Error creating teacher');
  }
};

module.exports = {
  getAllTeachers,
  getTeacherById,
  createTeacher
};

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Student = sequelize.define('Student', {
  // Student table name
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  enrollment_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  class: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Student;

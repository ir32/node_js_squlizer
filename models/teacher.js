const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Teacher = sequelize.define('Teacher', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Teacher;

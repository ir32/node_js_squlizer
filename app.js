const express = require('express');
const studentRoutes = require('./routes/studentRoutes');
const sequelize = require('./sequelize');

const app = express();
const port = process.env.PORT || 3000;

const teacherRoutes = require('./routes/teacherRoutes');







// Middleware to parse JSON
app.use(express.json());

// Use student routes
app.use('/', studentRoutes);
app.use('/teachers', teacherRoutes);

// Sync models with database
(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synchronized successfully');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
})();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

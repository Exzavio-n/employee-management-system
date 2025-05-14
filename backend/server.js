const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Serve static frontend files (HTML, JS, CSS, images)
app.use(express.static(path.join(__dirname, '../frontend')));

// Import API routes
const dashboardRoutes = require('./routes/dashboard');
const employeeRoutes = require('./routes/employees');

// Use API routes
app.use('/dashboard', dashboardRoutes);
app.use('/employees', employeeRoutes);

// Redirect root path to index page
app.get('/', (req, res) => {
  res.redirect('/index/index.html');
});

// Route to get dashboard data
app.get('/api/dashboard', (req, res) => {
  const employeeCountQuery = 'SELECT COUNT(*) AS totalEmployee FROM employee';
  const positionCountQuery = 'SELECT COUNT(DISTINCT position) AS totalPosition FROM position';

  db.query(employeeCountQuery, (err, employeeResult) => {
    if (err) return res.status(500).json({ error: err });

    db.query(positionCountQuery, (err, positionResult) => {
      if (err) return res.status(500).json({ error: err });

      res.json({
        employeeCount: employeeResult[0].employeeCount,
        positionCount: positionResult[0].positionCount
      });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

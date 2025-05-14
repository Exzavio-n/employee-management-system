const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const [empRows] = await db.query('SELECT COUNT(*) AS total_employees FROM employee');
    const [posRows] = await db.query('SELECT COUNT(*) AS total_positions FROM position');
    res.json({
      totalEmployees: empRows[0].total_employees,
      totalPositions: posRows[0].total_positions
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

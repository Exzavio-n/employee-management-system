const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM employee');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/add', async (req, res) => {
  const {
    first_name, middle_name, last_name, age, sex,
    civil_status, phone_number, email_address, home_address,
    date_of_birth, position_id
  } = req.body;

  try {
    const [result] = await db.query(
      `INSERT INTO employee
      (first_name, middle_name, last_name, age, sex, civil_status,
       phone_number, email_address, home_address, date_of_birth, position_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        first_name, middle_name, last_name, age, sex,
        civil_status, phone_number, email_address,
        home_address, date_of_birth, position_id
      ]
    );
    res.json({ message: 'Employee added', insertId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

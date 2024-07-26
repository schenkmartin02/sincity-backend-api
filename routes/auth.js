const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { accounts } = require('../models')
const router = express.Router();

router.post('/login', async (req, res) => {
  const { emailValue, passwordValue } = req.body;

  try {
    const user = await accounts.findOne({ where: { email: emailValue } });

    if (!user) {
      return res.status(401).json({ message: 'Hibás emailcim vagy jelszó' });
    }

    const isPasswordValid = await bcrypt.compare(passwordValue, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Hibás emailcim vagy jelszó' });
    }

    const token = jwt.sign({ id: user.accountID, email: user.email }, process.env.JWT_SECRET, { expiresIn: '10h' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000, // 1 hour
    });

    res.json({ message: 'Sikeres bejelentkezés', token });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const { accounts, vehicles, interiors } = require('../models')

router.get('/stats', async (req, res) => {
  try {
    const accountCount = await accounts.count();
    const vehicleCount = await vehicles.count();
    const propertyCount = await interiors.count();

    res.json({
      accounts: accountCount,
      vehicles: vehicleCount,
      properties: propertyCount,
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
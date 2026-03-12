const express = require('express');
const EnergyController = require('../controllers/energy_data.controller');

const router = express.Router();

router.get('/', EnergyController.fetchallEnergy)

module.exports = router;
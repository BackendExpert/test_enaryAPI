const express = require('express');
const FactorsController = require('../controllers/factors.contoller');

const router = express.Router();

router.get('/', FactorsController.fetchallFactorsdata)

module.exports = router;
const express = require('express');
const router = express.Router();

const prognostico = require('../models/Prognostico');
const prognosticoController = require('../controller/prognostico')(prognostico);

router.get('/api/prognostico', prognosticoController.getAll);

module.exports = router;
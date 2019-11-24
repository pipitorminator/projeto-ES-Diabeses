const express = require('express');
const router = express.Router();

const medicoClinica = require('../models/MedicoClinica');
const medicoClinicaController = require('../controller/medicoClinica')(medicoClinica);

router.get('/api/medicoClinica', medicoClinicaController.getAll);

module.exports = router;
const express = require('express');
const router = express.Router();

const medicoClinica = require('../models/MedicoClinica');
const medicoClinicaController = require('../controller/medicoClinica')(medicoClinica);

router.get('/api/medicoClinica', medicoClinicaController.getAll);
router.post('/api/cadastroMedicoClinica', medicoClinicaController.cadastroMedicoClinica);

module.exports = router;
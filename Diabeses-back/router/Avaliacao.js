const express = require('express');
const router = express.Router();

const avaliacao = require('../models/Avaliacao');
const avaliacaoController = require('../controller/avaliacao')(avaliacao);

router.get('/api/avaliacao', avaliacaoController.getAll);

module.exports = router;
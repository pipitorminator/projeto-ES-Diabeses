const express = require('express');
const router = express.Router();

const user = require('../models/usuario');
const userController = require('../controller/usuario')(user);

router.get('/api/user', userController.getAll);
router.get('/api/userLogin', userController.userLogin);

module.exports = router;
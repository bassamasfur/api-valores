const express = require('express');
const router = express.Router();
const { obtenerIndicadores } = require('../controllers/indicadoresController');

router.get('/hoy', obtenerIndicadores);

module.exports = router;

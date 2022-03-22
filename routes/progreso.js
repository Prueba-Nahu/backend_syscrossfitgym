const express = require('express');
const progresoController = require('../controller/progresoController');
const router = express.Router();

router.get('/listar_progresos',progresoController.getProgresosCliente);



module.exports = router;
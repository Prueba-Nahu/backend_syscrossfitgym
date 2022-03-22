const express = require('express');
const ejercicioController = require('../controller/ejercicioController');
const router = express.Router();

router.get('/',(req,res)=>{
	res.send('Ejercicios');
});
router.get('/listar',ejercicioController.listar);
router.get('/listar/:id',ejercicioController.searchById);
router.get('/listar/:name',ejercicioController.searchByName);

module.exports = router;
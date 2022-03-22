const express = require("express");
const clienteController = require('../controller/clienteController');
const router = express.Router();

router.get('/',(req,res)=>{
	res.send('Hola mundo');
});
router.get('/listar',clienteController.list);
router.post('/save',clienteController.save);
router.get('/listar/:id',clienteController.search);
router.delete('/delete/:id',clienteController.delete);

module.exports=router;
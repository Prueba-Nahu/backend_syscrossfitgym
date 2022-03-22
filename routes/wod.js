const express = require('express');
const wodController = require('../controller/wodController');
const router = express.Router();

router.get('/',(req,res)=>{
	res.send('WODS');
});

router.get('/listar',wodController.listar);
router.get('/listar/:id',wodController.search);

module.exports=router;
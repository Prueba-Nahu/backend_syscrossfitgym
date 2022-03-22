const pool = require('../config');
const controller = {};


controller.listar=(req,res)=>{
	pool.query('SELECT * FROM wod',(err,wod)=>{
		if(err) throw err;
		res.send(wod);
	})
}

controller.search=(req,res)=>{
	const id = req.params.id;
	pool.query('SELECT * FROM wod WHERE codigo_wod = ?',id,(err,wod)=>{
		if(err)throw err;
		res.send(wod);
	})
}


module.exports=controller;
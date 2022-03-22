const pool = require('../config');
const controller = {};

controller.listar = (req,res)=>{
	pool.query('SELECT * FROM ejercicio', (err,ejercicios)=>{
		if(err) throw err;
		res.send(ejercicios);
	})
}

controller.searchById = (req,res)=>{
	const id = req.params.id;
	pool.query('SELECT * FROM ejercicio WHERE codigo_ejercicio = ?',id,(err,ejercicio)=>{
		if(err) throw err;
		res.send(ejercicio);
	})
}

controller.searchByName = (req,res)=>{
	const name = req.params.name;
	pool.query("SELECT * FROM ejercicio WHERE descripcion = '?'",name,(err,ejercicios)=>{
		if(err) throw err;
		res.send(ejercicios);
	})
}


module.exports = controller;

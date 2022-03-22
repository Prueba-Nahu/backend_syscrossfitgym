const pool = require('../config');
const controller = {};



controller.list = (req,res)=>{
	
		pool.query('SELECT * FROM cliente',(err,clientes)=>{
			if(err){
				res.json(err);
			}
			res.send(clientes);
		});
	
}

controller.search = (req,res)=>{
	const id = req.params.id;
	pool.query('SELECT * FROM cliente WHERE codigo = ?',id,(err,cliente)=>{
		if(err) throw err;
		res.send(cliente);
	})

}

controller.save = (req,res)=>{
	pool.query('INSERT INTO cliente SET ?',req.body,(err,cliente)=>{
		if(err) throw err;
		res.send('Nuevo cliente');
		console.log(req.body);
	});
};

controller.delete=(req,res)=>{
	const id = req.params.id;
	pool.query("DELETE FROM cliente WHERE codigo = ?",id,(err,cliente)=>{
		if(err) throw err;
		res.send('Cliente Eliminado correctamente');
	})
}

module.exports = controller;
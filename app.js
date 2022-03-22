const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");

//importando rutas
const clienteRoutes = require('./routes/cliente');
const wodRoutes = require('./routes/wod');
const progresoRoutes = require('./routes/progreso');
const ejercicioRoutes = require('./routes/ejercicio');

//Configuraciones
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Routes
app.use('/cliente',clienteRoutes);

app.use('/wod',wodRoutes);
app.use('/progreso',progresoRoutes);
app.use('/ejercicio',ejercicioRoutes);



app.listen(3000,()=>{
	console.log("Servidor en puerto 3000 corriendo....");
})
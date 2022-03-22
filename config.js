const mysql = require('mysql');


const config = {
	host: 'localhost',
	user: 'palo',
	pass: 'root',
	database: 'sysvikingbox'
};

const pool = mysql.createPool(config);

module.exports = pool;
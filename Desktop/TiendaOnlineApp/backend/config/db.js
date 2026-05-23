const mysql = require("mysql2");

const conexion = mysql.createConnection({
  host: process.env.MYSQLHOST || process.env.DB_HOST,
  user: process.env.MYSQLUSER || process.env.DB_USER,
  password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD,
  database: process.env.MYSQLDATABASE || process.env.DB_NAME,
  port: process.env.MYSQLPORT || process.env.DB_PORT || 3306,
});

conexion.connect((error) => {

    if(error){

        console.log(error);

    }else{

        console.log("MySQL conectado");

    }

});

module.exports = conexion;
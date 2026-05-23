const db = require("../config/db");

const Usuario = {

    crear: (datos, callback) => {

        const sql = `
        
        INSERT INTO usuarios
        (nombre, email, password)

        VALUES (?, ?, ?)

        `;

        db.query(

            sql,

            [
                datos.nombre,
                datos.email,
                datos.password
            ],

            callback

        );

    },

    buscarPorEmail: (email, callback) => {

        const sql =
        "SELECT * FROM usuarios WHERE email = ?";

        db.query(sql, [email], callback);

    }

};

module.exports = Usuario;
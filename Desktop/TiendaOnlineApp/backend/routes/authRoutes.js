const express = require("express");
const router = express.Router();

const conexion = require("../config/db");


// LOGIN
router.post("/login", (req, res) => {

    const { correo, password } = req.body;

    const sql =
    "SELECT * FROM usuarios WHERE email = ? AND password = ?";

    conexion.query(
        sql,
        [correo, password],

        (error, resultados) => {

            if(error){

                return res.status(500).json({
                    mensaje: "Error del servidor"
                });

            }

            if(resultados.length > 0){

                return res.status(200).json({
                    mensaje: "Login correcto"
                });

            }else{

                return res.status(401).json({
                    mensaje: "Credenciales incorrectas"
                });

            }

        }
    );

});


// REGISTER
router.post("/register", (req, res) => {

    const { nombre, correo, password } = req.body;

    const verificar =
    "SELECT * FROM usuarios WHERE email = ?";

    conexion.query(
        verificar,
        [correo],

        (error, resultados) => {

            if(resultados.length > 0){

                return res.status(400).json({
                    mensaje: "El correo ya existe"
                });

            }

            const sql =
            "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)";

            conexion.query(
                sql,
                [nombre, correo, password],

                (error, resultado) => {

                    if(error){

                        return res.status(500).json({
                            mensaje: "Error al registrar"
                        });

                    }

                    return res.status(200).json({
                        mensaje: "Usuario registrado correctamente"
                    });

                }
            );

        }
    );

});

module.exports = router;
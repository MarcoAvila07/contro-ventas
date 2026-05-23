const Usuario =
require("../models/usuarioModel");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");



// REGISTRO

exports.registro = (req, res) => {

    const {
        nombre,
        email,
        password
    } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {

        if(err){

            return res.status(500).json(err);

        }

        Usuario.crear(

            {
                nombre,
                email,
                password: hash
            },

            (error, resultado) => {

                if(error){

                    return res.status(500).json(error);

                }

                res.json({

                    mensaje:
                    "Usuario registrado"

                });

            }

        );

    });

};




// LOGIN

exports.login = (req, res) => {

    const {
        email,
        password
    } = req.body;

    Usuario.buscarPorEmail(

        email,

        async (error, resultados) => {

            if(error){

                return res.status(500).json(error);

            }

            if(resultados.length === 0){

                return res.status(404).json({

                    mensaje:
                    "Usuario no encontrado"

                });

            }

            const usuario = resultados[0];

            const passwordCorrecto =
            await bcrypt.compare(
                password,
                usuario.password
            );

            if(!passwordCorrecto){

                return res.status(401).json({

                    mensaje:
                    "Contraseña incorrecta"

                });

            }

            const token = jwt.sign(

                {
                    id: usuario.id
                },

                process.env.JWT_SECRET,

                {
                    expiresIn: "1d"
                }

            );

            res.json({

                mensaje:
                "Login exitoso",

                token,

                usuario: {

                    id: usuario.id,

                    nombre: usuario.nombre,

                    email: usuario.email

                }

            });

        }

    );

};
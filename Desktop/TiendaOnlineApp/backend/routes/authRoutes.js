const express = require("express");
const router = express.Router();

let usuarios = [
  {
    nombre: "Marco",
    correo: "mavilapalomo@gmail.com",
    password: "123456"
  }
];

router.post("/register", (req, res) => {
  const { nombre, correo, password } = req.body;

  const existe = usuarios.find(
    (user) => user.correo === correo
  );

  if (existe) {
    return res.status(400).json({
      mensaje: "El correo ya existe"
    });
  }

  usuarios.push({
    nombre,
    correo,
    password
  });

  return res.status(200).json({
    mensaje: "Usuario registrado correctamente"
  });
});

router.post("/login", (req, res) => {
  const { correo, password } = req.body;

  const usuario = usuarios.find(
    (user) =>
      user.correo === correo &&
      user.password === password
  );

  if (!usuario) {
    return res.status(401).json({
      mensaje: "Credenciales incorrectas"
    });
  }

  return res.status(200).json({
    mensaje: "Login correcto",
    usuario
  });
});

module.exports = router;
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      nombre: "Laptop",
      precio: 2500000,
      imagen:
        "https://cdn-icons-png.flaticon.com/512/179/179386.png",
    },
    {
      id: 2,
      nombre: "Mouse Gamer",
      precio: 120000,
      imagen:
        "https://cdn-icons-png.flaticon.com/512/686/686589.png",
    },
    {
      id: 3,
      nombre: "Teclado Mecánico",
      precio: 300000,
      imagen:
        "https://cdn-icons-png.flaticon.com/512/3659/3659899.png",
    },
  ]);
});

module.exports = router;
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/products",
  require("./routes/productsRoutes")
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
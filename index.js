const express = require("express");
const router = require("./src/routes/user");
// Iniciar e conectar o banco de dados.
const database = require("./src/database");

const app = express();
const porta = 3000;
app.use(express.json());

database.db
  .sync({ force: false }) // Criar tabela no banco de dados.
  .then((_) => {
    app.listen(porta, () => {
      console.log("Server running on port " + porta);
    });
  })
  .catch((e) => {
    console.erro(`Was not possible to connect with database: ${e}`);
  });

app.use("/api/v1/user", router);

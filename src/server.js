const express = require("express");
const path = require("path");
const enableHotReload = require("./hot-reload");
const app = express();
const bodyParser = require("body-parser");

// Puxando os controladores da aplicação
const contatosController = require("./controllers/contatosController");

// Configuração de body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

// Habilitar hot-reload
enableHotReload(app);

// Rotas
app.get("/", contatosController.exibircontatos);
app.get("/adicionar-novo-contato", contatosController.exibirNovacontatos);
app.post("/adicionar", contatosController.adicionarcontatos);

// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
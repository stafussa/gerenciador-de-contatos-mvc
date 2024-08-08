var contatosModel = require("../models/contatosModel");

// Controle da rota index
function exibircontatos(request, response) {
  var contatos = contatosModel.listarcontatos();
  console.log('contatos:', contatos);
  response.render("index");
}

// Controle da rota adicionarTarefa
function exibirNovacontatos(request, response) {
  response.render("adicionarcontatos");
}

function adicionarcontatos(request, response) {
  console.log('Chegou na adicionarContatos');
  console.log(request.body);

  var Nome = request.body.Nome;
  var telefone = request.body.telefone;
  var email = request.body.email;
  contatosModel.adicionarcontatos(Nome, telefone, email);
  response.redirect('/');

}

module.exports = { exibircontatos, exibirNovacontatos, adicionarcontatos };
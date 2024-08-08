var contatos = [];

function adicionarcontatos(Nome, telefone, email) {



    contatos.push({
        id: Date.now(),
        nome: Nome,
        telefone: telefone,
        email: email
    });
}


function listarcontatos() {
    return contatos;
}


module.exports = { adicionarcontatos, listarcontatos }
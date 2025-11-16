function buscarDados() {
    var cpf = document.getElementById('identificadorCPF').value ////////

    fetch('http://localhost:3000/pessoas', {
        method: 'GET'
    })
    .then(resposta => resposta.json())
    .then(dados => {
        let pessoaEncontrada = dados.find(pessoas => pessoas.cpf === cpf) //////

        if(pessoaEncontrada) {
            document.getElementById('identificador').value = pessoaEncontrada.id 
            document.getElementById('nomeAtualizar').value = pessoaEncontrada.nome
            document.getElementById('sobrenomeAtualizar').value = pessoaEncontrada.sobrenome
            document.getElementById('idadeAtualizar').value = pessoaEncontrada.idade
            document.getElementById('identificadorCPF').value = pessoaEncontrada.cpf 
            document.getElementById('emailAtualizar').value = pessoaEncontrada.email
            document.getElementById('senhaAtualizar').value = pessoaEncontrada.senha
            document.getElementById('ruaAtualizar').value = pessoaEncontrada.rua
            document.getElementById('cepAtualizar').value = pessoaEncontrada.cep 
            document.getElementById('cidadeAtualizar').value = pessoaEncontrada.cidade 
            document.getElementById('estadoAtualizar').value = pessoaEncontrada.estado
            document.getElementById('telefoneAtualizar').value = pessoaEncontrada.telefone
        } else {
            alert("Pessoa não encontrada")
        }
    })
}

function atualizarDados() {
    var id = document.getElementById('identificador').value
    var nome = document.getElementById('nomeAtualizar').value
    var sobrenome = document.getElementById('sobrenomeAtualizar').value
    var idade = document.getElementById('idadeAtualizar').value
    var cpf = document.getElementById('identificadorCPF').value
    var email = document.getElementById('emailAtualizar').value
    var senha = document.getElementById('senhaAtualizar').value
    var rua = document.getElementById('ruaAtualizar').value
    var cep = document.getElementById('cepAtualizar').value
    var cidade = document.getElementById('cidadeAtualizar').value
    var estado = document.getElementById('estadoAtualizar').value
    var telefone = document.getElementById('telefoneAtualizar').value

    fetch(`http://localhost:3000/pessoas/${id}`, {
        method: 'PUT', //Metodo PUT HTTP
        headers: {
            'Content-Type': 'application/json' //Tipo de conteudo enviado JSON
        },
        body: JSON.stringify({nome: nome, sobrenome: sobrenome, idade: idade, cpf: cpf, email: email, senha: senha, rua: rua, cep: cep, cidade: cidade, estado: estado, telefone: telefone}) //Dados a serem enviados e convertidos ////////
    })
    .then(resposta => resposta.JSON) //Converte a resposta para JSON
}

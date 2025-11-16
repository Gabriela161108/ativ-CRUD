function logarCliente() {

    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value

    fetch('http://localhost:3000/pessoas').then(achar => achar.json()).then(usuario => {
        var pessoa = usuario.find(pessoas => pessoas.email === email && pessoas.senha === senha)

        if(pessoa) {
            window.location.href = "./stream.html"
        } else {
            alert("Sem cadastro existente");
            window.location.href = "./post.html"
        }
    })
}
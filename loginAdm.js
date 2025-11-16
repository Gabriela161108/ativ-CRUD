function logar() {
    
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value

    
    fetch('http://localhost:3000/logins').then(achar => achar.json()).then(usuario => {
        
        var pessoa = usuario.find(pessoas => pessoas.login === login && pessoas.senha === senha)
        
        if(pessoa) {
            window.location.href = "./get.html"
        } else {
            alert("Usuário/Senha incorretos! Tente novamente")
        }
    })
    console.log(data)
}

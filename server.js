
const jsonServer = require('json-server');


const server = jsonServer.create();


const router = jsonServer.router('db.json');


const middlewares = jsonServer.defaults();


server.use(middlewares);


const porta = 3000;


server.use(router);


const express = require('express');


const app = express();


app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
})


server.listen(porta, () => {
    console.log(`JSON SERVER está rodando em http://localhost:${porta}`);
})
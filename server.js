//Usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()

//configurar arquivos estáticos (css, script, imagens)
server.use(express.static("public"))


// Criei uma rota /
//e capturo o pedido do cliente para responder
server.get("/", function(req, res){
    console.log("Estou pronto")
    return res.sendFile(__dirname +"/index.html")
})

server.get("/ideias", function(req, res){
    console.log("Estou pronto")
    return res.sendFile(__dirname +"/ideias.html")
})

// liguei meu servidor na porta 3000
server.listen(3000)
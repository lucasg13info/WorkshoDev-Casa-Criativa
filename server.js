//Usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()

// Criei uma rota /
//e capturo o pedido do cliente para responder
server.get("/", function(req, res){
    console.log("cheguei")
    return res.sendFile(__dirname +"/index.html")
})


// liguei meu servidor na porta 3000
server.listen(3000)
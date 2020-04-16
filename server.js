//Usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()

//configurar arquivos estáticos (css, script, imagens)
server.use(express.static("public"))

//Configuração do Nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, //Quando atualizar o html ou css ele atualiza na página 
})















//Array (vetores)
const latinhas = [
    {marca: "coca-cola"}
    {marca: "pepsi"}
]
































// Criei uma rota /
//e capturo o pedido do cliente para responder
server.get("/", function(req, res){
    return res.render("index.html")
})

server.get("/ideias", function(req, res){
    return res.render("ideias.html")
})


// liguei meu servidor na porta 3000
server.listen(3000)
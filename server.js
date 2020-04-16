//Usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()

const ideas = [
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Curso de Programação",
        category: "Estudo",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam modi voluptates fugit in iusto nam blanditiis facilis incidunt aliquam",
        url: "https://rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam modi voluptates fugit in iusto nam blanditiis facilis incidunt aliquam",
        url: "https://rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729027.svgg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam modi voluptates fugit in iusto nam blanditiis facilis incidunt aliquam",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Karaokê",
        category: "Diversão",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam modi voluptates fugit in iusto nam blanditiis facilis incidunt aliquam",
        url: "https://rocketseat.com.br"
    },
]

//configurar arquivos estáticos (css, script, imagens)
server.use(express.static("public"))

//Configuração do Nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, //Quando atualizar o html ou css ele atualiza na página 
})


// Criei uma rota /
//e capturo o pedido do cliente para responder
server.get("/", function(req, res){

    //REGRA DE NEGÓCIO 
    let lastIdeas = []
    for (let idea of ideas.reverse()){// .reverse  Pega o lastIdeas e inverte a forma de visualizar 
        if (lastIdeas.length < 2 ){
            lastIdeas.push(idea)
        }
    }
    
    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", function(req, res){
    return res.render("ideias.html", {ideas: ideas.reverse()})
})


// liguei meu servidor na porta 3000
server.listen(3000)
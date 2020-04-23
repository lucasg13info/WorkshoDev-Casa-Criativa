//Usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()

const db = require("./db") //Exportando do banco de dados db.js

//const ideas = [
//   {
//       img:"https://image.flaticon.com/icons/svg/2729/2729007.svg",
//       title: "Curso de Programação",
//       category: "Estudo",
//       description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam modi voluptates fugit in iusto nam blanditiis facilis incidunt aliquam",
//       url: "https://rocketseat.com.br"
//   },
//   {
//       img:"https://image.flaticon.com/icons/svg/2729/2729005.svg",
//       title: "Exercícios",
//       category: "Saúde",
//       description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam modi voluptates fugit in iusto nam blanditiis facilis incidunt aliquam",
//       url: "https://rocketseat.com.br"
//   },
//   {
//       img:"https://image.flaticon.com/icons/svg/2729/2729027.svg",
//       title: "Meditação",
//       category: "Mentalidade",
//       description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam modi voluptates fugit in iusto nam blanditiis facilis incidunt aliquam",
//       url: "https://rocketseat.com.br"
//   },
//   {
//       img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
//       title: "Karaokê",
//       category: "Diversão",
//       description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam modi voluptates fugit in iusto nam blanditiis facilis incidunt aliquam",
//       url: "https://rocketseat.com.br"
//   },
//   {
//       img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
//       title: "Pintura",
//       category: "Criatividade",
//       description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam modi voluptates fugit in iusto nam blanditiis facilis incidunt aliquam",
//       url: "https://rocketseat.com.br"
//   },
//   {
//       img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
//       title: "Recortes",
//       category: "Criatividade",
//       description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam modi voluptates fugit in iusto nam blanditiis facilis incidunt aliquam",
//       url: "https://rocketseat.com.br"
//   },
//
//
//configurar arquivos estáticos (css, script, imagens)
server.use(express.static("public"))


//habilitar uso do req.body
server.use(express.urlencoded({extended: true}))

//Configuração do Nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, //Quando atualizar o html ou css ele atualiza na página 
})


// Criei uma rota /
//e capturo o pedido do cliente para responder
server.get("/", function(req, res){

    db.all(`SELECT * FROM ideas`, function(err, rows){
        if(err){
            console.log(err)
            return res.send("Erro no banco de dados")
        } 

        //REGRA DE NEGÓCIO INDEX
        const reversedIdeas = [...rows].reverse() 
        let lastIdeas = []
        for (let idea of reversedIdeas){// .reverse  Pega o lastIdeas e inverte a forma de visualizar 
            if (lastIdeas.length < 2 ){
                lastIdeas.push(idea)
            }
        }
        
        return res.render("index.html", { ideas: lastIdeas })  
    })



    
})


//Regra de negócio pagina ideias
server.get("/ideias", function(req, res){



    db.all(`SELECT * FROM ideas`, function(err, rows){
        if(err){
            console.log(err)
            return res.send("Erro no banco de dados")
        } 

        const reversedIdeas = [...rows].reverse() 
        return res.render("ideias.html", {ideas: reversedIdeas})
    })
})

//logica para receber dados via post
server.post("/", function(req, res) {
    //INSERIR DADOS NA TABELA
    const query = `
        INSERT INTO ideas(
            image,
            title,
            category,
            description,
            link
        ) VALUES(?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link,
    ]

    db.run(query, values, function(err) {
        if(err){
            console.log(err)
            return res.send("Erro no banco de dados")
        } 

         return res.redirect("/ideias") //Após a inclusão no banco redirecionar página ideas
    })


})


// liguei meu servidor na porta 3000
server.listen(3000)
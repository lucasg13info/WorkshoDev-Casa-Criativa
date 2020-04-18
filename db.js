// Configurando banco de dados
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database( './ws.db')



db.serialize(function(){
    // CRIAR A TABELA

    //INSERIR DADOS NA TABELA

    //CONSULTAR DADOS NA TABELA

    // DELETAR UM DADO NA TABELA
})
// Vamos falar de coisas básicas da programação em JavaScript

// Criando um objeto
const xicara = {
    cor: "branco",
    tamanho: 10,
    estaSujo(simNao){
        //lógica de programação
        console.log(simNao)
    }
}

//Criando variaveis que são os atributos do objeto
const cor = "preto"
const tamanho = 5

function sujo(esta){
    console.log(esta)
}

//chamando atributos externos
const xicara2 = {   
    cor, 
    tamanho,
    sujo
}
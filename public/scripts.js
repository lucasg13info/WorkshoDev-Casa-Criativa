// Fazer o Com amor Rocketseat apareça e desapareça
function onOff(){
     document
        .querySelector("#modal") /*Procura o elemento o id #modal */
        .classList
        .toggle("hide")

        document
                .querySelector("body") /*Procura o body */
                .classList
                .toggle("hideScroll")


        document
                .querySelector("#modal") /*Procura o elemento o id #modal */
                .classList
                .toggle("addScroll")
}
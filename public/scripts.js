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

function checkFields(event) {
        const valuesToCheck = [
                "title",
                "image",
                "category",
                "description",
                "link",
        ]

        const isEmpty = valuesToCheck.find(function(value){
                const checkIfIsString = typeof event.target[value].value ==="string"
                
                if(checkIfIsString &&  ){

                }
        })
        for (let value of valuesToCheck){
                
        }
}
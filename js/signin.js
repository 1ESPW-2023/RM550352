"use strict";

const usuario1 = {
    nomeUsuario: "rm550352"
    senhaUsuario: "12345"
}


addEventListener("click", (evt)=>{
    if(evt.target.id == "btnSubmit"){

        let usuarioInput = document.querySelector("#usuario").value;
        let senhaInput = document.querySelector("#senha").value;

        if(usuarioInput == "rm550352" && senhaInput == "12345"){
            console.log("USUÁRIO VALIDADO!");
        }else{
            console.log("SENHA OU NOME DE USUÁRIO INVÁLIDO!")
        }
    }
});
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let contaimerPassword = document.querySelector("#container-password")

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@";
let novaSenha ="";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){ 
    sizePassword.innerHTML = this.value;
}

function genaretePassword(){

    let pass ="";
    for(let i= 0, n = charset.length; i < sliderElement.value; ++i){
     pass += charset.charAt(Math.floor(Math.random()*n));
     
    }



    contaimerPassword.classList.remove("hidden");
    password.innerHTML = pass;
    novaSenha = pass;

}

function copyPassword(){
    alert("senha copiada com sucesso!!");
    navigator.clipboard.writeText(novaSenha);
}

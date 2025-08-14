function mensagem(){
    const men =document.getElementById("mensagem");
    const cupomDigitado ="diadecomprar";
    const cupom = document.getElementById("cupom").value;
    const bot =document.getElementById("botao");
    if(cupom == cupomDigitado){
    men.innerHTML = "cupom valido"
    }
    else{
        men.innerHTML = "cupom invalido"
    }

}

const primeiraNota = document.querySelector(".p-nota");
const segundaNota = document.querySelector(".s-nota");
const btnCalc = document.querySelector("button");
const media = document.querySelector(".media");
const result = document.querySelector(".result");


btnCalc.addEventListener("click", displayMedia);

function displayMedia(){

    const divDisplay = document.querySelector(".display-result");
    let inputPrimeira = parseFloat(primeiraNota.value);
    let inputSegunda = parseFloat(segundaNota.value);

    if(inputPrimeira > 10 || inputSegunda > 10 || isNaN(inputPrimeira) || isNaN(inputSegunda)){
        alert("Digite um número até 10 em ambos os campos");
        
    } 
    else{
        if(divDisplay.classList.contains("hidden")){
            divDisplay.classList.remove("hidden");
            divDisplay.classList.add("block");
           }

           calculoNota();
    }


}


function calculoNota(){

    let inputPrimeira = parseFloat(primeiraNota.value);
    let inputSegunda = parseFloat(segundaNota.value);


    let resultMedia = (inputPrimeira + inputSegunda) / 2; 
    media.innerHTML = `${resultMedia.toFixed(1)}`;
 
    result.innerHTML = resultMedia >= 7 ? "Aprovado!" : "Reprovado!";
}
       

window.addEventListener("load", () => {
    primeiraNota.value = "";
    segundaNota.value = "";
    primeiraNota.focus();
});

window.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
displayMedia();
    }
});

import { characters } from "../data/data.js";
import { Carta} from "../modules/carta.js";

let containerCarta = document.querySelector('.carta-box');


document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('cart')){
        cambiarCara(e);
    }
})


function cambiarCara(evento){
    console.log("Se cambia la cara");
    console.log(evento.target.id);

}

document.addEventListener("DOMContentLoaded", () => {
    characters.forEach((elemento,index)=>{
        Carta(containerCarta,elemento.image,elemento.id);
    })
    console.log(containerCarta);
});
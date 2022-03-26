import {
    characters
} from "../data/data.js";
import {
    Carta
} from "../modules/carta.js";

let containerCarta = document.querySelector('.carta-box');


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart')) {
        cambiarCara(e);
    }
})


function cambiarCara(evento) {
    console.log("Se cambia la cara");
    console.log(evento.target.id);

}

document.addEventListener("DOMContentLoaded", () => {
    let newCards = modificarCartas();   
    newCards.forEach((carta)=>{
        Carta(containerCarta,carta.image,carta.id)
    }); 
});

function modificarCartas(){
    let nuevasCartas = characters.slice(0,5);
    let cartasRepetidas = [...nuevasCartas,...nuevasCartas];
    let cartas = _.shuffle(cartasRepetidas);
    return cartas;
}
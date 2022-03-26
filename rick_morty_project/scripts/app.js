import {
    characters
} from "../data/data.js";
import {
    Carta
} from "../modules/carta.js";

let containerCarta = document.querySelector('.carta-box');
let nuevaCarta = document.getElementsByClassName('front-card');
let vida = document.querySelector('.vida');
console.log(nuevaCarta);


document.addEventListener('click', (e) => {
    for (let i = 0; i < nuevaCarta.length; i++) {
        if(e.target.id === nuevaCarta[i].id) {
            console.log("Hola")
        }
        
    }
})


function cambiarCara(evento) {
    console.log(evento.target.id);

}

const sonIguales = (evento)=>{
}

document.addEventListener("DOMContentLoaded", () => {
    vida.textContent = 3;
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
import {
    characters
} from "../data/data.js";
import {
    Carta
} from "../modules/carta.js";

let containerCarta = document.querySelector('.carta-box');
let nuevaCarta = document.getElementsByClassName('front-card');
let vida = document.querySelector('.vida');


document.addEventListener('click', (e) => {
    cambiarCara(e);
})


function cambiarCara(evento) {
    let variable = null;
    variable = evento.target.id;
    console.log(variable);
    let front = document.getElementsByClassName('front');
    let back = document.getElementsByClassName('back');
    console.log(back)
    for (let i = 0; i < front.length; i++) {
        front[i].addEventListener('click', () => {
            front[i].classList.add('voltear');
            back[i].classList.add('cambiarBack');
        });
    }
    
}

const sonIguales = (evento) => {}

document.addEventListener("DOMContentLoaded", () => {
    vida.textContent = 3;
    let newCards = modificarCartas();
    newCards.forEach((carta) => {
        Carta(containerCarta, carta.image, carta.id)
    });
});

function modificarCartas() {
    let nuevasCartas = characters.slice(0, 5);
    let cartasRepetidas = [...nuevasCartas, ...nuevasCartas];
    let cartas = _.shuffle(cartasRepetidas);
    return cartas;
}
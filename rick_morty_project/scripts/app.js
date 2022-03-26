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
    let arregloNuevo = [...characters, ...characters]
    for (let i = 0; i < arregloNuevo.length - 30; i++) {
        Carta(containerCarta,arregloNuevo[i].image,arregloNuevo[i].id)
    }
    console.log(containerCarta);
});
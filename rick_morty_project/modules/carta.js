export const Carta = (contenedorCarta,cartaAtras,id) => {
    contenedorCarta.innerHTML += `
    <div class="card">
      <div class="front">
          <img src="img/image1.png" width="200" height="250px" class ="front-card"id="${id}">
      </div>
      <div class="back">
        <img src="${cartaAtras}" width="200" height="250px">
      </div>
    </div>
    `;
}

  
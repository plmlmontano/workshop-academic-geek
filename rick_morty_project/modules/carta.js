export const Carta = (contenedorCarta,cartaAtras,id) => {
    contenedorCarta.innerHTML += `
    <div class="carta">
      <div class="cara">
          <img src="img/image1.png" width="200" height="250px" class="cart" id="${id}">
      </div>
      <div class="cara detras">
        <img src="${cartaAtras}" width="200" height="250px">
      </div>
    </div>
    `;
}

  
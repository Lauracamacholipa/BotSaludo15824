function agregarMensajeAlChat(origen, mensaje, div) {
    const mensajeElemento = document.createElement("p");
    mensajeElemento.textContent = `${origen}: ${mensaje}`;
    div.appendChild(mensajeElemento);
  }
  
  export default agregarMensajeAlChat;
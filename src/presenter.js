import saludarPorTiempo from "./saludadorConTiempo";

//const inputTexto = document.querySelector("#input-texto");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

const saludoInicial = saludarPorTiempo();
agregarMensajeAlChat("Máquina", saludoInicial);

function agregarMensajeAlChat(origen, mensaje) {
  const mensajeElemento = document.createElement("p");
  mensajeElemento.textContent = `${origen}: ${mensaje}`;
  div.appendChild(mensajeElemento);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

});

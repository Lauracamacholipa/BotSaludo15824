import saludarPorTiempo from "./saludadorConTiempo";

const inputTexto = document.querySelector("#input-texto");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

let estadoConversacion = 0;
let nombreUsuario;

const saludoInicial = saludarPorTiempo();
agregarMensajeAlChat("Máquina", saludoInicial);
agregarMensajeAlChat("Máquina", "Puedes darme tu nombre?");

function agregarMensajeAlChat(origen, mensaje) {
  const mensajeElemento = document.createElement("p");
  mensajeElemento.textContent = `${origen}: ${mensaje}`;
  div.appendChild(mensajeElemento);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const textoIngresado = inputTexto.value;

  if (estadoConversacion === 0) {
    nombreUsuario = textoIngresado;
    agregarMensajeAlChat("Usuario", nombreUsuario);
    agregarMensajeAlChat("Máquina", `Gracias, ${nombreUsuario}!`);

    inputTexto.placeholder = "Ingresa tu género...";
    inputTexto.value = "";

    estadoConversacion = 1;
    agregarMensajeAlChat("Máquina", "Cual es tu género?");
  }

});

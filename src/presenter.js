import saludarPorTiempo from "./saludadorConTiempo";
import saludarPorNombre from "./saludadorConNombre";
import saludarPorGenero from "./saludadorPorGenero";
import saludarPorEdad from "./saludadorPorEdad";
import saludarPorIdioma from "./saludadorPorIdioma";
import saludoCompleto from "./saludadorCompleto";
import agregarMensajeAlChat from "./agregarMensajeAlChat";

const inputTexto = document.querySelector("#input-texto");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

let estadoConversacion = 0;
let nombre = '';
let genero = '';
let edad = '';
let idioma = '';

const saludoInicial = saludarPorTiempo();
agregarMensajeAlChat("Máquina", saludoInicial, div);
agregarMensajeAlChat("Máquina", "Puedes darme tu nombre?", div);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (estadoConversacion === 0) {
    nombre = saludarPorNombre(inputTexto, div);
    estadoConversacion = 1;
    agregarMensajeAlChat("Máquina", "Ahora podrías decirme ¿Cuál es tu género? (femenino o masculino)", div);
  
  } else if (estadoConversacion === 1){
    genero = saludarPorGenero(inputTexto, div,nombre);
    estadoConversacion = 2;
    agregarMensajeAlChat("Máquina", "¿Cuál es edad?", div);
  
  } else if (estadoConversacion === 2){
    edad = saludarPorEdad(inputTexto, div,nombre,genero);
    estadoConversacion = 3;
    agregarMensajeAlChat("Máquina", "¿Prefieres hablar español o Inglés? (ES o EN)" , div);
  
  } else if (estadoConversacion === 3){
    idioma = saludarPorIdioma(inputTexto, div,nombre);
    estadoConversacion = 4;
    
  } else if (estadoConversacion === 4){
    saludoCompleto(inputTexto, div,nombre,genero,edad,idioma);
    estadoConversacion = 0;
  } 
});

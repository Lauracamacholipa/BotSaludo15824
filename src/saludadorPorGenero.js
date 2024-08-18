import agregarMensajeAlChat from "./agregarMensajeAlChat";

function saludarPorGenero(inputTexto, div,nombre) {
    const genero = inputTexto.value;

    agregarMensajeAlChat("Usuario", genero, div);
    agregarMensajeAlChat("Máquina", `Gracias, ${nombre}! Ahora, se que eres del género ${genero}`, div);
  
    inputTexto.value = "";
    inputTexto.placeholder = "Ingresa tu edad...";
  
    return genero; 
  }
  
  export default saludarPorGenero;
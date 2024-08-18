import agregarMensajeAlChat from "./agregarMensajeAlChat";

function saludarPorNombre(inputTexto, div) {
    const nombre = inputTexto.value;

    agregarMensajeAlChat("Usuario", nombre, div);
    agregarMensajeAlChat("Máquina", `Gracias, ${nombre}!`, div);
  
    inputTexto.value = "";
    inputTexto.placeholder = "Ingresa tu género...";
  
    return nombre; 
  }
  
  export default saludarPorNombre;
  
  
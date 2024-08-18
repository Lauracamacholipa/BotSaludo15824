import agregarMensajeAlChat from "./agregarMensajeAlChat";

function saludarPorIdioma(inputTexto, div,nombre) {
    const idioma = inputTexto.value;

    agregarMensajeAlChat("Usuario", idioma, div);
    if(idioma==="ES"){
        agregarMensajeAlChat("Máquina", `Gracias, ${nombre}! Ahora, se que prefieres el Español`, div);
    } else {
        agregarMensajeAlChat("Machine", `Thank you, ${nombre}! Now, I know you prefer English`, div);
    }
    inputTexto.value = "";
    return idioma; 
  }
  
  export default saludarPorIdioma;
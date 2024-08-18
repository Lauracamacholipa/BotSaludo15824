import agregarMensajeAlChat from "./agregarMensajeAlChat";

function saludarPorIdioma(inputTexto, div,nombre) {
    const idioma = inputTexto.value;

    agregarMensajeAlChat("Usuario", idioma, div);
    if(idioma==="ES"){
        agregarMensajeAlChat("Máquina", `Gracias, ${nombre}! Ahora, se que prefieres el Español`, div);
        agregarMensajeAlChat("Máquina", "Tu saludo esta listo. Haz click en el botón" , div);
    } else {
        agregarMensajeAlChat("Machine", `Thank you, ${nombre}! Now, I know you prefer English`, div);
        agregarMensajeAlChat("Machine", "Your greeting is ready. Click on the button" , div);
    }
    inputTexto.value = "";
    return idioma; 
  }
  
  export default saludarPorIdioma;
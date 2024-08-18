import agregarMensajeAlChat from "./agregarMensajeAlChat";

function saludoCompleto(inputTexto, div,nombre,genero,edad,idioma) {

    if(idioma==="ES"){
        agregarMensajeAlChat("Máquina", `Usuario con el nombre ${nombre}, deL género ${genero}
                            , de edad ${edad}. Gracias por hablar con el Bot!`, div);
    } else {
        agregarMensajeAlChat("Machine", `User with name ${nombre}, gender ${genero}
                            , of age ${edad}. Thanks for talking to the Bot!`, div);
    }
  
    inputTexto.value = "";
    inputTexto.placeholder = "Ingresa tu nombre...";
    return;
  }
  
  export default saludoCompleto;
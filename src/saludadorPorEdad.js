import agregarMensajeAlChat from "./agregarMensajeAlChat";

function saludarPorEdad(inputTexto, div,nombre,genero) {
    const edad = inputTexto.value;

    agregarMensajeAlChat("Usuario", edad, div);
    if(genero === "masculino"){
        if(edad>=60){
            agregarMensajeAlChat("Máquina", `Gracias, ${nombre}! Ahora, se que eres un adulto mayor`, div);
        } else if(edad>=27){
            agregarMensajeAlChat("Máquina", `Gracias, ${nombre}! Ahora, se que eres un adulto`, div);
        } else if(edad>=19){
            agregarMensajeAlChat("Máquina", `Gracias, ${nombre}! Ahora, se que eres un joven`, div);
        } else if(edad>=14){
            agregarMensajeAlChat("Máquina", `Gracias, ${nombre}! Ahora, se que eres un adolescente`, div);
        } else{
            agregarMensajeAlChat("Máquina", `Gracias, ${nombre}! Ahora, se que eres un niño`, div);
        } 
    } else if(genero === "femenino"){
        if(edad>=60){
            agregarMensajeAlChat("Máquina", `Gracias, ${nombre}! Ahora, se que eres una adulta mayor`, div);
        } else if(edad>=27){
            agregarMensajeAlChat("Máquina", `Gracias, ${nombre}! Ahora, se que eres una adulta`, div);
        } else if(edad>=19){
            agregarMensajeAlChat("Máquina", `Gracias, ${nombre}! Ahora, se que eres una jovencita`, div);
        } else if(edad>=14){
            agregarMensajeAlChat("Máquina", `Gracias, ${nombre}! Ahora, se que eres una adolescente`, div);
        } else{
            agregarMensajeAlChat("Máquina", `Gracias, ${nombre}! Ahora, se que eres una niña`, div);
        } 
    }
  
    inputTexto.value = "";
    inputTexto.placeholder = "Ingresa tu idioma preferido...";
  
    return edad; 
  }
  
  export default saludarPorEdad;
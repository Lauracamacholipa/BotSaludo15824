function generarSaludo(nombre, genero, edad, idioma) {
  let saludoBase = idioma === "es" ? "Hola" : "Hello";

  if (nombre) {
    saludoBase += `, ${nombre}`;
  }

  if (genero) {
    saludoBase += genero === "masculino" ? " señor" : " señora";
  }

  if (edad) {
    saludoBase += ` de ${edad} años`;
  }

  return saludoBase + "!";
}

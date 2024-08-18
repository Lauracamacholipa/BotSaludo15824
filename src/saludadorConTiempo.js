function saludarPorTiempo() {
  const horas = new Date().getHours();
  let momento;

  if (horas < 12) {
    momento = "buenos días";
  } else if (horas < 18) {
    momento = "buenas tardes";
  } else {
    momento = "buenas noches";
  }
  return `Hola, ${momento}!`;
}

export default saludarPorTiempo;

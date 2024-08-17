import generarSaludo from "./saludador";

const nombre = document.querySelector("#primer-numero");
const genero = document.querySelector("#segundo-numero");
const edad = document.querySelector("#sumar-form");
const idioma = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
const form = document.querySelector("#saludo-form");
const nombreInput = document.querySelector("#nombre");
const generoInput = document.querySelector("#genero");
const edadInput = document.querySelector("#edad");
const idiomaInput = document.querySelector("#idioma");
const resultadoDiv = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  const genero = generoInput.value;
  const edad = Number(edadInput.value);
  const idioma = idiomaInput.value;

  const saludo = generarSaludo(nombre, genero, edad, idioma);
  resultadoDiv.innerHTML = `<p>${saludo}</p>`;
});




/* Dar la funcionalidad de sumar y restar a la calculadora, 
mostrando el resultado en el elemento con clase resultado. 
Si el resultado de la resta entrega un número negativo debes  mostrar  un  0.*/

const resultado = document.querySelector(".resultado");
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const btnSumar = document.getElementById("btn-sumar");
const btnRestar = document.getElementById("btn-restar");

btnSumar.addEventListener("click", () => {
  const suma = Number(valor1.value) + Number(valor2.value);
  if (isNaN(suma)) resultado.textContent = "Error";
  else resultado.textContent = suma;
});

btnRestar.addEventListener("click", () => {
  const resta = Number(valor1.value) - Number(valor2.value);
  if (isNaN(resta)) resultado.textContent = "Error";
  else if (resta < 0) resultado.textContent = 0;
  else resultado.textContent = resta;
});

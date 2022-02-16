/* A partir de un selector de colores, cambia el color del cuadro principal al hacer click 
sobre  uno  de  los  colores.  
 */

const caja = document.querySelector("#caja");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");

btn1.addEventListener(
  "click",
  () => (caja.style.backgroundColor = btn1.style.backgroundColor)
);
btn2.addEventListener(
  "click",
  () => (caja.style.backgroundColor = btn2.style.backgroundColor)
);
btn3.addEventListener(
  "click",
  () => (caja.style.backgroundColor = btn3.style.backgroundColor)
);
btn4.addEventListener(
  "click",
  () => (caja.style.backgroundColor = btn4.style.backgroundColor)
);
btn5.addEventListener(
  "click",
  () => (caja.style.backgroundColor = btn5.style.backgroundColor)
);
btn6.addEventListener(
  "click",
  () => (caja.style.backgroundColor = btn6.style.backgroundColor)
);

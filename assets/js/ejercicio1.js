const resultado = document.querySelector(".resultado");
const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const errorNombre = document.querySelector(".errorNombre");

const asunto = document.getElementById("asunto");
const errorAsunto = document.querySelector(".errorAsunto");

const mensaje = document.getElementById("mensaje");
const errorMensaje = document.querySelector(".errorMensaje");

const tagsP = document.querySelectorAll("p");
const regex = /^[a-zA-Z ]+$/;

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  resultado.style.visibility = "visible";
  tagsP.forEach((e) => {
    e.style.visibility = "visible";
  });

  if (!regex.test(nombre.value)) {
    errorNombre.textContent = " El nombre es requerido ";
  } else {
    errorNombre.style.visibility = "hidden";
  }
  if (!regex.test(asunto.value)) {
    errorAsunto.textContent = " El Asunto es requerido ";
  } else {
    errorAsunto.style.visibility = "hidden";
  }
  if (!regex.test(mensaje.value)) {
    errorMensaje.textContent = " El Mensaje es requerido ";
  } else {
    errorMensaje.style.visibility = "hidden";
  }
  if (
    regex.test(nombre.value) &&
    regex.test(asunto.value) &&
    regex.test(mensaje.value)
  ) {
    resultado.textContent = " Mensaje enviado con éxito ";
  } else {
    resultado.style.visibility = "hidden";
  }
});

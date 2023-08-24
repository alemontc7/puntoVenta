import sumar from "./sumador";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio")
const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");
const estado = document.querySelector("#estados");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cantidadItem = Number.parseInt(cantidad.value);
  const precioItem = Number.parseInt(precio.value)
  const estadoSeleccionado = estado.value;
  div.innerHTML = "<p>" + cantidad.value + "</p> <p>" + precio.value + "</p> <p>" + estadoSeleccionado + "</p>" ;
});



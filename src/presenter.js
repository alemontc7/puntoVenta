import SellPoint from "./sellpoint";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio")
const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");
const estado = document.querySelector("#estados");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cantidadItem = Number.parseInt(cantidad.value);
  const precioItem = Number.parseFloat(precio.value)
  const estadoSeleccionado = estado.value;
  const SP1 = new SellPoint(estadoSeleccionado, cantidadItem, precioItem);
  div.innerHTML = "<p>" + cantidad.value + "</p> <p>" + precio.value + "</p> <p>" + estadoSeleccionado + "</p>" 
  +"<p>" + SP1.getPorcentaje() + "</p> <p>" + "Precio Neto es:"+ SP1.getPrecioNeto().toFixed(2) + "</p> <p>" + 
      "Precio con impuesto es: " + SP1.getTotalConImpuesto().toFixed(2);
});




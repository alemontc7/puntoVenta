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

  // Convert numbers to 2 decimal places for display
  const precioNetoFormatted = SP1.getPrecioNeto().toFixed(2);
  const totalConImpuestoFormatted = SP1.getTotalConImpuesto().toFixed(2);

  div.innerHTML = `
    <p><strong>Detalles de la Venta:</strong></p>
    <p><strong>Cantidad:</strong> ${cantidadItem}</p>
    <p><strong>Precio:</strong> ${precioItem}</p>
    <p><strong>Estado:</strong> ${estadoSeleccionado}</p>
    <p><strong>Porcentaje de Impuesto:</strong> ${SP1.getPorcentaje()}</p>
    <p><strong>Precio Neto:</strong> ${precioNetoFormatted}</p>
    <p><strong>Precio con Impuesto:</strong> ${totalConImpuestoFormatted}</p>
  `;
});


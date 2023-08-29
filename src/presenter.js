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

  const precioNetoFormatted = SP1.getPrecioNeto().toFixed(2);
  const totalConImpuestoFormatted = SP1.getTotalConImpuesto().toFixed(2);
  const totalConDescuentos = SP1.getPrecioNetoConDescuento().toFixed(2);
  const totalImpuesto = SP1.getTotalImpuesto().toFixed(2);
  div.innerHTML = `
    <p><strong>Detalles de la Venta:</strong></p>
    <p><strong>Precio neto : $</strong> ${SP1.getPrecioNeto()}</p>
    <p><strong>Descuento </strong> ${ "(" +  SP1.getDescuento()*100 + "%) " + " : " + totalConDescuentos + " $"}  </p>
    <p><strong>Impuesto para </strong> ${estadoSeleccionado + "(%" + SP1.getPorcentaje()*100 + ")" + ": " + SP1.getTotalImpuesto()} </p>
    <p><strong>TOTAL A PAGAR (Precio neto + Impuesto - descuento): $</strong> ${SP1.getTotalAPagar()}</p>
  `;
});


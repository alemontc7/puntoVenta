import sumar from "./sumador";

const items = document.querySelector("#items");
const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const itemsValue = Number.parseInt(items.value);

  div.innerHTML = "<p>" + itemsValue + "</p>";
});



import constants from "./constantes.js";
import { getData } from "./request.js";
import { crearTemplate } from "./templateGen.js";

const template = document.getElementById("template");

btnPerros.addEventListener("click", async () => {
  const dataP = await getData(constants.urlPerros);
  crearTemplate('dogs', dataP, template);
});

btnGatos.addEventListener("click", async () => {
  const dataG = await getData(constants.urlGatos);
  crearTemplate('cats', dataG, template);
});




import constants from "./constantes.js";
import { getData } from "./request.js";
import { crearTemplate } from "./templateGen.js";


const template = document.getElementById("templateFav");


btnPerros.addEventListener("click", async () => {
    const dataP = await getData(constants.urlPerros);
    let favoritoP= [];
    iteradorFavorito(dataP, favoritoP);
    crearTemplate('dogs', favoritoP, template);
});

btnGatos.addEventListener("click", async () => {
    const dataG = await getData(constants.urlGatos);
    let favoritoG= [];
    iteradorFavorito(dataG, favoritoG);
    crearTemplate('cats', favoritoG, template);
});

function iteradorFavorito (data,arrayFav){
    for (const iterator of data) {
        if(iterator["favorito"] == true){
            arrayFav.push(iterator);
        }
    }
}

import constants from "./constantes.js";
import { getData, updateData } from "./request.js";

const getTemplateDescrip = document.getElementById("templateDescrip");
let type = "";
let id = null;
let btnFavoritos = null;
let pet = null;
let usuario = null;


(() => {
    type = gup('type');
    id = gup('id');
    getInfoPet(type, id);
})();

async function getInfoPet(type, id) {
    const data = await getData(type === 'dogs' ? constants.urlPerros + id : constants.urlGatos + id);
    pet = data;
    const dataUsers = await getData(constants.urlUsuario + '?idU=' + id);
    usuario =  dataUsers[0];
    templateDescrip(data, getTemplateDescrip, usuario);
    
}

// funcion para atrapar informacion de la URL
function gup(name, url) {
    name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    var results = new RegExp('[?&]' + name + '=?([^&#]*)').exec(url || window.location.href);
    return results == null ? null : results[1] || true;
}


const templateDescrip = (pet, template, usuario) => {
    template.innerHTML = "";
    const { imgPerfil, nombre, edad, direccion, raza, iconoGenero, favorito} = pet;
    const {imgProfile, nombreU, apellido} = usuario;
    template.innerHTML =
        `
                <div class="row" style="margin-top: 5%;" id="contenedorImagen">
                <div class="col-12 col-sm-6 col-md-5 col-lg-5" >
                    <img src="${imgPerfil} " class="header-mascota" alt="${raza}" >
                    <button class="btn-back Botones-varios" onclick="window.history.back()"><img src="./resources/img/back.png" alt="back"> </button>
                </div>
                <div class="col-12 col-sm-6 col-md-7 col-lg-7 row row-cols-2 row">
                        <div class="col">
                            <h2><b>${nombre}</b><img
                            src="${iconoGenero} "
                            alt="Gender"></h3>
                        </div>
                        <div class="col d-flex justify-content-end">
                            <button id="btnFavoritos" style="border: none;background-color: transparent;">                                
                                <img src="./resources/img/${favorito ? 'addFavorite.png' : 'favorite.png'}" alt="agregar a favoritos">
                            </button>
                        </div>
                        <div class="col">
                                <img src="./resources/img/raza.png" alt="Raza">
                                ${raza}
                        </div>
                        <div class="col">    
                                <img src="./resources/img/edad.png" alt="Edad">
                                ${edad}
                        </div>
                        <br><br>
                        <div class="col-12">    
                            <img src="./resources/img/ubicacion.png" alt="ubication">
                            <span> ${direccion} </span>
                        </div>
                </div>
            </div>

            <br>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-5 col-lg-5 row row-cols-2 justify-content-center" id="per-his" >
                    <div class="col-12">    
                        <h3><b>Personalidad</b></h3>
                    </div>
                    <div class="col-3 personalities">
                        <img src="https://res.cloudinary.com/docutv7ug/image/upload/v1649638590/Api-Adoption/jugueton_orkfv1.png" alt="cariñoso">
                        <br>
                        Cariñoso
                    </div>
                    <div class="col-3 personalities">
                        <img src="https://res.cloudinary.com/docutv7ug/image/upload/v1649638590/Api-Adoption/jugueton_orkfv1.png" alt="cariñoso">
                        <br>
                        Cariñoso
                    </div>
                    
                    <div class="col-3 personalities">
                        <img src="https://res.cloudinary.com/docutv7ug/image/upload/v1649638590/Api-Adoption/jugueton_orkfv1.png" alt="cariñoso">
                        <br>
                        Cariñoso
                    </div>
                </div>
                
                <div class="col-12 col-sm-6 col-md-7 col-lg-7 row row-cols-2 row" id="per-his">
                    <div class="col-12">    
                        <h3><b>Historia de ${nombre} </b></h3>
                    </div>
                    <div class="col-12">    
                        <p>${nombre} es un perrito muy lindo y cariñoso,
                            tiene 5 hermanitos más y por cuestiones de
                            espacio y tiempo no podremos cuidar a
                            todos, nuestra misión es encontrar la familia
                            ideal para él y seguro que tú eres la persona
                            indicada.</p>
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-12 row cols-3 justify-content-center" >
                    <div class="col-2 col-sm-2 col-md-2 col-lg-2 circular circ" style="margin-left: 2px" >
                        <img src="${imgProfile}" class="circular-img circimg">
                    </div>
                    <div class="col-5 col-sm-5 col-md-4 col-lg-4">
                        Publicado por
                        <br>
                        <b>${nombreU} ${apellido} </b>
                    </div>
                    <div class="col-5 col-sm-5 col-md-6 col-lg-6">
                        <button class="button-custom-contact" onclick="window.location.href= './chat.html'" >Contactar</button>
                    </div>
                </div>    
            </div>
    `;
    btnFavoritos = document.getElementById("btnFavoritos");
    btnFavoritos.addEventListener("click", favoritos);

}

function favoritos() {
    const url = type === 'dogs' ? constants.urlPerros + id : constants.urlGatos + id;
    pet.favorito = !pet.favorito;
    updateData(url, pet);
    templateDescrip(pet, getTemplateDescrip, usuario);
}


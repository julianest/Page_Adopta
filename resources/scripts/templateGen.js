export const crearTemplate = (type, mascotas, template) => {
    template.innerHTML = "";
    mascotas.forEach((element, index) => {
      const isEven = index % 2 === 0;
      const { id, imgPerfil, nombre, raza } = element;
      template.innerHTML += `
            <div class="col-6" style="${isEven ? "margin-top: 0px" : "margin-top: 20px"}" 
              onclick="window.location.href = './mascota.html?type=${type}&id=${id}'">
              <div class="card" style="background-image: url(../${imgPerfil})">
                <div class="content">
                  <span style="margin-bottom: 0;font-size: 1em;font-weight: bold;">${nombre}</span>
                  <span>${raza}</span>
                </div>
              </div>
            </div>`;
    });
  };
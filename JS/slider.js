var slider = document.getElementById("slider");
var imagenActual = 0;

function siguienteImagen() {
  imagenActual++;
  if (imagenActual >= slider.children.length) {
    imagenActual = 0;
  }

  slider.children[imagenActual].style.display = "block";
  slider.children[imagenActual - 1].style.display = "none";
}

setInterval(siguienteImagen, 3000);

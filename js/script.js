/* Variables Media Querys */
let cuatroOchenta = "(max-width:480px)";
function inicio() {
  ocultarInicio();
  // document.getElementById('toggle-menu').addEventListener('click',mostrarMenu);
  mediaQuery(cuatroOchenta);
  document.getElementById("title").style.opacity = "0";
  document.getElementById("skills").style.opacity = "0";
  document.getElementById("name").style.opacity = "0";
  document.getElementById("photo").style.opacity = "0";
  setTimeout(function () {
    document.getElementById("title").style.animation = "appear 3s forwards";
  }, 500);
  setTimeout(() => {
    document.getElementById("skills").style.animation = "appear 3s forwards";
  }, 1000);
  setTimeout(() => {
    document.getElementById("name").style.animation = "appear 3s forwards";
  }, 1500);
  jump("twitter", 100, "jump", 5);
  jump("github", 300, "jump", 5);
  jump("linkedin", 500, "jump", 5);
  jump("whatsapp", 700, "jump", 5);
  jump("photo", 1400, "jump", 5);
}

/**
 *
 * @param {string} icon
 * @param {int} time
 * @param {string} animation
 * @param {double} delay
 */

function jump(icon, time, animation, delay) {
  setTimeout(() => {
    document.getElementById(icon).style.animation =
      animation + " ." + delay + "s forwards";
  }, time);
}

const mediaQuery = (e) => {
  if (window.matchMedia(e).matches) {
    /* Removemos el video a partir de 480px para prevenir la demora en la carga de la web */
    let videoHeader = document.getElementById("headerVideo");
    let header = document.getElementById("header");

    header.removeChild(videoHeader);
  }
};
window.addEventListener("load", inicio);

function mostrarMenu(e) {
  if (document.getElementById("nav").classList.toggle("mostrar-menu")) {
    document.getElementById("toggle-menu").style.color = "white";
  } else {
    document.getElementById("toggle-menu").style.color = "#00adb5";
  }
}
function mostrarMunudesk() {
  document.getElementById("nav-ul").classList.toggle("mostrar-menu-desk");
}
function ocultarInicio() {
  let inicio = document.getElementById("inicio");
  inicio.style.transition = "opacity .3s easy all";
  inicio.style.opacity = "0";
  inicio.style.display = "none";
}

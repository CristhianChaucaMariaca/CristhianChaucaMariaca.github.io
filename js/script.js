
/* Variables Media Querys */
let cuatroOchenta = "(max-width:480px)";
function inicio(){
    ocultarInicio();
    document.getElementById('toggle-menu').addEventListener('click',mostrarMenu);
    mediaQuery(cuatroOchenta);
}
const mediaQuery=(e)=>{
    if(window.matchMedia(e).matches)
    {
        /* Removemos el video a partir de 480px para prevenir la demora en la carga de la web */
        let videoHeader=document.getElementById("headerVideo");
        let header = document.getElementById("header");

        header.removeChild(videoHeader);
    }
}
window.addEventListener('load', inicio);


function mostrarMenu(e){
    if(document.getElementById('nav').classList.toggle('mostrar-menu'))
    {
        document.getElementById('toggle-menu').style.color="white"
    }
    else{
        document.getElementById('toggle-menu').style.color="#00adb5"
    }
}
function mostrarMunudesk(){
    document.getElementById('nav-ul').classList.toggle('mostrar-menu-desk');
}
function ocultarInicio(){
    let inicio = document.getElementById('inicio');
    inicio.style.transition= "opacity .3s easy all";
    inicio.style.opacity= "0";
    inicio.style.display = "none";

}



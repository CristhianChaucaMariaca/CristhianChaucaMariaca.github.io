window.addEventListener('load', inicio);
function inicio(){
    ocultarInicio();
    document.getElementById('toggle-menu').addEventListener('click',mostrarMenu);
    document.getElementById('togle-menu2').addEventListener('click', mostrarMunudesk);
}

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


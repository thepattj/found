function inicio() {    
    paginaInicio = document.querySelector(".contenido");
    paginaSesion = document.querySelector(".sesion");
    paginaInicio.classList.add("nver360");
    paginaSesion.classList.add("ver");
    paginaSesion.classList.remove("nver");
    paginaInicio.classList.remove("ver");
    
}

function cancelar(){
    paginaInicio = document.querySelector(".contenido");
    paginaSesion = document.querySelector(".sesion");
    paginaInicio.classList.add("ver");
    paginaSesion.classList.add("nver360");
    paginaSesion.classList.remove("ver");
    paginaInicio.classList.remove("nver360");
}
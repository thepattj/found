function pagina(liga){
    window.location.assign(liga);
}

function inicio() {    
    paginaInicio = document.querySelector(".contenido");
    paginaSesion = document.querySelector(".sesion");
    paginaInicio.classList.add("nver");
    paginaInicio.classList.remove("ver");
    paginaSesion.classList.add("ver");
    paginaSesion.classList.remove("nver");
    
    
}

function login(){
    window.location.assign('principal.php');
}

function cancelar(){
    paginaInicio = document.querySelector(".contenido");
    paginaSesion = document.querySelector(".sesion");
    paginaInicio.classList.add("ver");
    paginaInicio.classList.remove("nver");
    paginaSesion.classList.add("nver");
    paginaSesion.classList.remove("ver");
    
}

function valida(e){
	tecla = (document.all) ? e.keyCode : e.which;
	patron = /[0-9]/;
	tecla_final=String.fromCharCode(tecla);
	return patron.test(tecla_final);
}

function guardar(){
    window.location.assign('principal.php');
}

function regreso(){
    window.location.assign('index.html')
}


function pagina(liga){
    window.location.assign(liga);
}

function inicio() {    //FUNCION PARA HACER LA TRANSICION DEL CONTENIDO DE INICIAR SESION
    paginaInicio = document.querySelector(".contenido");
    paginaSesion = document.querySelector(".sesion");
    paginaInicio.classList.add("nver");
    paginaInicio.classList.remove("ver");
    paginaSesion.classList.add("ver");
    paginaSesion.classList.remove("nver");    
}

function login(){ //FUNCION PARA PODER INICIAR SESION
    correo = document.getElementById('correo').value;
    pass = document.getElementById('pass').value;
    if (escorreo(correo) && pass.length>0){
        if(correo==localStorage.getItem('correo') && pass==localStorage.getItem('password')){
            alert("Bienvenido "+localStorage.getItem('nombre'));
            window.location.assign('principal.php');
        }else{
            alert("Datos Incorrectos");
        }
    }
}

function cancelar(){ //FUNCION PARA HACER LA TRANSICION DEL CONTENIDO DE INICIO SESION
    paginaInicio = document.querySelector(".contenido");
    paginaSesion = document.querySelector(".sesion");
    paginaInicio.classList.add("ver");
    paginaInicio.classList.remove("nver");
    paginaSesion.classList.add("nver");
    paginaSesion.classList.remove("ver");    
}

function estelefono(no){ //FUNCION PARA VALIDAR TELEFONO
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    if(no.match(phoneno)){
        return true;
    }
    else{
        return false;
    }
}

function escorreo(cor){ //FUNCION PARA VALIDAR CORREO
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cor)){
        return true;
    }
    else{
        return false;
    }
}

function guardar(){ //FUNUCION QUE GUARDA EN LOCALSTORAGE EL REGISTRO
    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    pass = document.getElementById('pass').value;
    direccion = document.getElementById('direccion').value;
    telefono = document.getElementById('telefono').value;
    if (escorreo(correo) && pass.length>6 && estelefono(telefono) && direccion.length>0 && nombre.length>0) {
        localStorage.setItem('nombre',nombre);
        localStorage.setItem('correo',correo);
        localStorage.setItem('password',pass);
        localStorage.setItem('dir1',direccion);
        localStorage.setItem('telefono',telefono);
        alert("Registro Exitoso!");
        window.location.assign('index.html');
    }
    else{
        alert("nel");
    }
}

function cargarDatos(){ //funcion para cargar los datos del localstorage en usuario.html
    nombre = localStorage.getItem('nombre');
    correo = localStorage.getItem('correo');
    pass = localStorage.getItem('password');
    dir1 = localStorage.getItem('dir1');
    dir2 = localStorage.getItem('dir2');
    dir3 = localStorage.getItem('dir3');

    document.getElementById('nombre').value=nombre;
    document.getElementById('correo').value=correo;
    document.getElementById('pass').value=pass;
    document.getElementById('dir1').value=dir1;
    document.getElementById('dir2').value=dir2;
    document.getElementById('dir3').value=dir3;
}

function guardarNuevo(){ //funcion para guardar los datos al localstorage en usuario.html

    nombre=document.getElementById('nombre').value;
    correo=document.getElementById('correo').value;
    pass=document.getElementById('pass').value;
    dir1=document.getElementById('dir1').value;
    dir2=document.getElementById('dir2').value;
    dir3=document.getElementById('dir3').value;

    if(nombre.length>0){
        localStorage.setItem('nombre',nombre);
    }
    if(correo.length>0 && escorreo(correo)){
        localStorage.setItem('correo',correo);
    }
    if(pass.length>6){
        localStorage.setItem('password',pass);
    }
    if(dir1.length>0){
        localStorage.setItem('dir1',dir1);
    }
    if(dir2.length>0){
        localStorage.setItem('dir2',dir2);
    }
    if(dir3.length>0){
        localStorage.setItem('dir3',dir3);
    }

    alert("Datos Cambiados Exitosamente!")
}
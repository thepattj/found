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

function cancelar(){
    paginaInicio = document.querySelector(".contenido");
    paginaSesion = document.querySelector(".sesion");
    paginaInicio.classList.add("ver");
    paginaInicio.classList.remove("nver");
    paginaSesion.classList.add("nver");
    paginaSesion.classList.remove("ver");
    
}

function estelefono(no){
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    if(no.match(phoneno)){
        return true;
    }
    else{
        return false;
    }
}

function escorreo(cor){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cor)){
        return true;
    }
    else{
        return false;
    }
}

function guardar(){
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

function regreso(){
    window.location.assign('index.html')
}

function getDireccion(){
    dire = document.getElementById('direccion').value;
    if (dire=="") {
    navigator.geolocation.getCurrentPosition(
        function( position ){ // success cb
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            var google_map_position = new google.maps.LatLng( lat, lng ); 
             var google_maps_geocoder = new google.maps.Geocoder();
                google_maps_geocoder.geocode(
                    { 'latLng': google_map_position },
                    function( results, status ) {
                        if ( status == google.maps.GeocoderStatus.OK && results[0] ) {
                            document.getElementById('direccion').value=( results[0].formatted_address );
                        }
                    }
                );
            },
        function(){ // fail cb
        }
    ); 
    }
}

function cargarDatos(){
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

function guardarNuevo(){

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
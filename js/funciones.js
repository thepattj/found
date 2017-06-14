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
            localStorage.setItem('sesion',true);
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
    direccion = document.getElementById('dir1').value;
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

function cargarDatosReg(){
    nombre = localStorage.getItem('nombre');
    correo = localStorage.getItem('correo');
    pass = localStorage.getItem('password');
    dir1 = localStorage.getItem('dir1');
    if (nombre!=null){
        document.getElementById('nombre').value=nombre;
    }
    if (correo!=null){
        document.getElementById('correo').value=correo;
    }
    if (pass!=null){
        document.getElementById('pass').value=pass;
    }
    if (dir1!=null){
        document.getElementById('dir1').value=dir1;
    }
}

function cerrarSesion(){
    localStorage.clear();
    pagina('index.html');
}

function irAMapa(id,r){
    localStorage.setItem('dirACamb',id);
    pagina('mapa.html');
    localStorage.setItem('regreso',r)
}

function agregarcarrito(i){
    if(localStorage.getItem("cant"+i)==null){
        localStorage.setItem("cant"+i,0);
    }
    var cantidad = parseInt(localStorage.getItem("cant"+i));
    cantidad = cantidad+1;
    localStorage.setItem("cant"+i,cantidad);
    window.navigator.vibrate(100);
}

function cargarCarrito(){

    var cant = new Array;
    cant[0] = localStorage.getItem('canthamburguesa');
    cant[1] = localStorage.getItem('cantpizza');
    cant[2] = localStorage.getItem('cantensalada');
    cant[3] = localStorage.getItem('cantribeye');
    cant[4] = localStorage.getItem('cantenchilada');
    cant[5] = localStorage.getItem('cantmollete');
    cant[6] = localStorage.getItem('cantquesadilla');

    if(cant.every(estaVacio)){
        divPrinc=document.getElementById('carr');
        divPrinc.innerHTML+= '<div class="elemento"> Carrito Vacio </div>';
    }else{


    var ordenActual = 0;
    if(!localStorage.getItem('cantOrdenes')){
        localStorage.setItem('cantOrdenes',0);
    }


    localStorage.setItem('plat0',"Hamburguesa");
    localStorage.setItem('plat1',"Pizza");
    localStorage.setItem('plat2',"Ensalada");
    localStorage.setItem('plat3',"Rib-Eye");
    localStorage.setItem('plat4',"Enchiladas");
    localStorage.setItem('plat5',"Molletes");
    localStorage.setItem('plat6',"Quesadillas");

    localStorage.setItem('prec0',"79");
    localStorage.setItem('prec1',"49");    
    localStorage.setItem('prec2',"85");
    localStorage.setItem('prec3',"245");
    localStorage.setItem('prec4',"120");
    localStorage.setItem('prec5',"39");
    localStorage.setItem('prec6',"30");

    divPrinc=document.getElementById('carr');

    totActual=0;
    ordenActual=parseInt(localStorage.getItem('cantOrdenes'))+1;

    for(x=0;x<7;x++){
        if(cant[x]>0){
            divPrinc.innerHTML+='<div class="elemento"><div class="elemento-titulo">'+localStorage.getItem('plat'+x)+' x '+cant[x]+'</div> <div class="elemento-precio"> $'+(parseInt(localStorage.getItem('prec'+x)))*cant[x]+'</div></div>'
            totActual=totActual+(parseInt(localStorage.getItem('prec'+x)))*cant[x];
        }
    }
    localStorage.setItem('totalActual',totActual);
    divPrinc.innerHTML+= '<div class="elemento"><div class="elemento-date"> No.Orden '+ordenActual+'</div> <div class="elemento-precio"> $'+localStorage.getItem('totalActual')+'</div></div> <div class="divboton"><button onclick="cobrar('+ordenActual+')">Cobrar</button></div>';
    }
}

function cobrar(e){ 
    ordenes = parseInt(localStorage.getItem('cantOrdenes'));
    ordenes = ordenes+1;
    var fecha = new Date();
    localStorage.setItem('cantOrdenes',ordenes);
    localStorage.setItem('fechaOrden'+ordenes,fecha);
    localStorage.setItem('precioOrden'+ordenes,localStorage.getItem('totalActual'));
    //limpiando los datos de esa orden
    localStorage.setItem('canthamburguesa',0);
    localStorage.setItem('cantpizza',0);
    localStorage.setItem('cantensalada',0);
    localStorage.setItem('cantenchilada',0);
    localStorage.setItem('cantmollete',0);
    localStorage.setItem('cantquesadilla',0);
    localStorage.setItem('cantribeye',0);
    console.log(localStorage.getItem('precioOrden'+ordenes));
}

function estaVacio(cant){
    return cant==null;
}

function cargarPedidos(){
    divPrinc=document.getElementById('ped')
    if(localStorage.getItem('cantOrdenes')==0){
        divPrinc.innerHTML+='<div class="elemento">No hay historial de ordenes</div>';
    }else{
        cantOrdenes=parseInt(localStorage.getItem('cantOrdenes'));
        for(x=1;x<=cantOrdenes;x++){
            divPrinc.innerHTML+='<div class="elemento"><div class="elemento-titulo"> Orden no.'+x+'</div><div class="elemento-precio"> $'+localStorage.getItem('precioOrden'+x)+'</div><div class="elemento-date">'+localStorage.getItem('fechaOrden'+x)+'</div></div>';
        }


    }
}
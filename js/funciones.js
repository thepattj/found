function pagina(liga){
    setTimeout(function(){
    window.location.assign(liga);},1000);
}

function verAlerta(contenido){
    document.getElementById('alertaContenido').innerHTML = contenido;
    window.navigator.vibrate(100);
    document.querySelector('.alerta').classList.add('veralert');
    setTimeout(function(){
        document.querySelector('.alerta').classList.remove('veralert')
    },3000);
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
            /*alert();*/
            verAlerta("Bienvenido "+localStorage.getItem('nombre'));
            localStorage.setItem('sesion',true);
            pagina('principal.php');
        }else{
            verAlerta("Datos Incorrectos");
        }
    }else{
        verAlerta("Ingresa tus Datos");
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
        localStorage.removeItem('nombreReg');
        localStorage.removeItem('correoReg');
        localStorage.removeItem('passwordReg');
        localStorage.removeItem('dir1Reg');
        localStorage.removeItem('telefonoReg');
        verAlerta('Registro correcto');
        /*alert("Registro Exitoso!");*/
        pagina('index.html');
    }
    else{
        verAlerta('Verifica tus datos');
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
    verAlerta('Datos Guardados Exitosamente');
}

function cargarDatosReg(){
    nombre = localStorage.getItem('nombreReg');
    correo = localStorage.getItem('correoReg');
    pass = localStorage.getItem('passwordReg');
    dir1 = localStorage.getItem('dir1Reg');
    telefono = localStorage.getItem('telefonoReg');
    if (nombre){
        document.getElementById('nombre').value=nombre;
    }
    if (correo){
        document.getElementById('correo').value=correo;
    }
    if (pass){
        document.getElementById('pass').value=pass;
    }
    if (dir1){
        document.getElementById('dir1').value=dir1;
    }
    if(telefono){
        document.getElementById('telefono').value=telefono;
    }
}

function cerrarSesion(){
    localStorage.clear();
    verAlerta('Se borro usuario')
    pagina('index.html');
}

function preSesion(){
    document.querySelector('.alertaC').classList.add('veralertsesion');
}

function salirSi(){
    pagina('index.html');
}
function salirNo(){
    document.querySelector('.alertaC').classList.remove('veralertsesion');
}

function preBorrar(){
    document.querySelector('.alertaB').classList.add('veralertsesion');
}

function borrarSi(){
    cerrarSesion();
}
function borrarNo(){
    document.querySelector('.alertaB').classList.remove('veralertsesion');
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
    verAlerta('Agregado a carrito');
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

    var elem= ['hamburguesa','pizza','ensalada','ribeye','enchilada','mollete','quesadilla'];
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
            divPrinc.innerHTML+='<div class="elemento1"><div class="elemento-titulo">'+localStorage.getItem('plat'+x)+' <button id="menos" onclick="restar('+"'"+elem[x]+"'"+')""> - </button> x '+cant[x]+'</div> <div class="elemento-precio"> $'+(parseInt(localStorage.getItem('prec'+x)))*cant[x]+'</div></div>'
            totActual=totActual+(parseInt(localStorage.getItem('prec'+x)))*cant[x];
        }
    }
    localStorage.setItem('totalActual',totActual);
    divPrinc.innerHTML+= '<div class="elemento1"><div class="elemento-date"> No.Orden '+ordenActual+'</div> <div class="elemento-precio"> $'+localStorage.getItem('totalActual')+'</div></div> <div class="divboton"><button onclick="metodo()">Pagar</button></div>';
    }
}                                                                                                                                                                                                                         /*onclick="cobrar('+ordenActual+')*/

function metodo(){
    document.querySelector('.pago').classList.add('pver');
}

function regreso(){
    document.querySelector('.pago').classList.remove('pver');
}

function efectivo(){
    formaPago = document.getElementById('pago').value;
    if(formaPago == 'cred'){
        ter = document.getElementById('terminal');
        ter.style="display: block;";
    }else{
        ter.style="display: none;";
    }
}

function cobrar(){
    verAlerta('Agregado a pedidos'); 
    ordenes = parseInt(localStorage.getItem('cantOrdenes'));
    ordenes = ordenes+1;
    var fecha = new Date();
    fechaBien = fecha.toLocaleString();
    localStorage.setItem('cantOrdenes',ordenes);
    localStorage.setItem('fechaOrden'+ordenes,fechaBien);
    localStorage.setItem('precioOrden'+ordenes,localStorage.getItem('totalActual'));
    //limpiando los datos de esa orden
    localStorage.setItem('canthamburguesa',0);
    localStorage.setItem('cantpizza',0);
    localStorage.setItem('cantensalada',0);
    localStorage.setItem('cantenchilada',0);
    localStorage.setItem('cantmollete',0);
    localStorage.setItem('cantquesadilla',0);
    localStorage.setItem('cantribeye',0);
    setTimeout( function(){
    location.reload();
    },1000);
}

function estaVacio(cant){
    return cant==null || cant==0;
}

function cargarPedidos(){
    divPrinc=document.getElementById('ped')
    if(localStorage.getItem('cantOrdenes')==0 || !localStorage.getItem('cantOrdenes')){
        divPrinc.innerHTML+='<div class="elementoPedido">No hay historial de ordenes</div>';
    }else{
        cantOrdenes=parseInt(localStorage.getItem('cantOrdenes'));
        if(cantOrdenes>1){//Si hay mas de una orden
        for(x=1;x<=cantOrdenes-1;x++){//Cada orden antes de la ultima            
            if(localStorage.getItem('statusOrden'+x)){//Si ya se recibio, con fecha de recibido
                divPrinc.innerHTML+='<div class="elementoPedido" id="orden'+x+'"><div class="elemento-titulo"> Orden no.'+x+'</div><div class="elemento-precio"> $'+localStorage.getItem('precioOrden'+x)+'</div><div class="elemento-date"> Pedido :'+localStorage.getItem('fechaOrden'+x)+'</div>  <div class="elemento-butt" id="btn'+x+'" onclick="enviado('+"'"+x+"'"+')"><img src="img/envio3.png"> </div> <div class="elemento-date">Recibido :'+localStorage.getItem('recibidoOrden'+x)+'</div></div>';
            }else{//Si no se ha recibido sin fecha de recibido
                divPrinc.innerHTML+='<div class="elementoPedido" id="orden'+x+'"><div class="elemento-titulo"> Orden no.'+x+'</div><div class="elemento-precio"> $'+localStorage.getItem('precioOrden'+x)+'</div><div class="elemento-date"> Pedido :'+localStorage.getItem('fechaOrden'+x)+'</div>  <div class="elemento-butt" id="btn'+x+'" onclick="enviado('+"'"+x+"'"+')"><img src="img/envio3.png"> </div> </div>';
            }
        }
        if(localStorage.getItem('statusOrden'+cantOrdenes)){//Para la ultima orden, aqui entra el margen bottom
                divPrinc.innerHTML+='<div  class="elementoPedido" id="orden'+cantOrdenes+'"><div class="elemento-titulo"> Orden no.'+cantOrdenes+'</div><div class="elemento-precio"> $'+localStorage.getItem('precioOrden'+cantOrdenes)+'</div><div class="elemento-date"> Pedido :'+localStorage.getItem('fechaOrden'+cantOrdenes)+'</div>  <div class="elemento-butt" id="btn'+cantOrdenes+'" onclick="enviado('+"'"+cantOrdenes+"'"+')"><img src="img/envio3.png"> </div> <div class="elemento-date" style="margin-bottom: 40px;">Recibido :'+localStorage.getItem('recibidoOrden'+cantOrdenes)+'</div></div>';
            }else{
                divPrinc.innerHTML+='<div  class="elementoPedido" id="orden'+cantOrdenes+'"><div class="elemento-titulo"> Orden no.'+cantOrdenes+'</div><div class="elemento-precio"> $'+localStorage.getItem('precioOrden'+cantOrdenes)+'</div><div class="elemento-date"> Pedido :'+localStorage.getItem('fechaOrden'+cantOrdenes)+'</div>  <div class="elemento-butt" id="btn'+cantOrdenes+'" style="margin-bottom: 40px;" onclick="enviado('+"'"+cantOrdenes+"'"+')"><img src="img/envio3.png"> </div> </div>';
            }
    }else{//Si solo hay una orden
        if(localStorage.getItem('statusOrden'+cantOrdenes)){//Si la orden ya se recibio lo agrega con la fecha de recibido
                divPrinc.innerHTML+='<div  class="elementoPedido" id="orden'+cantOrdenes+'"><div class="elemento-titulo"> Orden no.'+cantOrdenes+'</div><div class="elemento-precio"> $'+localStorage.getItem('precioOrden'+cantOrdenes)+'</div><div class="elemento-date"> Pedido :'+localStorage.getItem('fechaOrden'+cantOrdenes)+'</div>  <div class="elemento-butt" id="btn'+cantOrdenes+'" onclick="enviado('+"'"+cantOrdenes+"'"+')"><img src="img/envio3.png"> </div> <div class="elemento-date" >Recibido :'+localStorage.getItem('recibidoOrden'+cantOrdenes)+'</div></div>';
            }else{
                divPrinc.innerHTML+='<div  class="elementoPedido" id="orden'+cantOrdenes+'"><div class="elemento-titulo"> Orden no.'+cantOrdenes+'</div><div class="elemento-precio"> $'+localStorage.getItem('precioOrden'+cantOrdenes)+'</div><div class="elemento-date"> Pedido :'+localStorage.getItem('fechaOrden'+cantOrdenes)+'</div>  <div class="elemento-butt" id="btn'+cantOrdenes+'" onclick="enviado('+"'"+cantOrdenes+"'"+')"><img src="img/envio3.png"> </div> </div>';
            }
    }
    }
}

function enviado(pedido){
    if(!localStorage.getItem('recibidoOrden'+pedido)){
    verAlerta('Has recibido tu comida, gracias por usar found food');
    localStorage.setItem('statusOrden'+pedido,true);
    var fecha = new Date();
    fechaBien = fecha.toLocaleString();
    localStorage.setItem('recibidoOrden'+pedido,fechaBien)
    elemento = document.getElementById('orden'+pedido);
    boton = document.getElementById('btn'+pedido);
    boton.style="margin-bottom:0px";
    elemento.innerHTML+='<div class="elemento-date" style="margin-bottom: 40px";>Recibido :'+localStorage.getItem('recibidoOrden'+pedido)+'</div>';
    }else{
        verAlerta('Este pedido ya fue recibido el '+localStorage.getItem('recibidoOrden'+pedido));
    }
}

function restar(elemento){
    original = localStorage.getItem('cant'+elemento);
    localStorage.setItem('cant'+elemento,original-1);
    verAlerta('Elemento borrado del carrito');
    setTimeout( function(){
    location.reload();
    },1000);
}

function guardarTemp(){
    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    pass = document.getElementById('pass').value;
    direccion = document.getElementById('dir1').value;
    telefono = document.getElementById('telefono').value;  
    if(nombre){
        localStorage.setItem('nombreReg',nombre);
    }
    if(correo){
        localStorage.setItem('correoReg',correo);
    }
    if(pass){
        localStorage.setItem('passwordReg',pass);
    }
    if(direccion){
        localStorage.setItem('dir1Reg',direccion);
    }
    if(telefono){
        localStorage.setItem('telefonoReg',telefono);
    }
}
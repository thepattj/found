<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" type="text/css" href="estilo.css">
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
    <script src="js/funciones.js"></script>
</head>
<!--<nav>
   <img id="ima1" src="img/atras1.png">
</nav>-->

<body>
    <div class="pantalla-reg">
       <div class="div3"></div><div class="div4"><h2>REGISTRATE</h2></div><div class="div4"></div><div class="div12"></div>
       <div class="filtro"></div>
       
        <form onsubmit="return false">
            <div class="div4">Nombre</div>
            <div class="div8"><input type="text" placeholder="Nombre(s) Apellido" id="nombre"></div>
            <div class="div12"></div>

            <div class="div4">Correo</div>
            <div class="div8"><input type="text" placeholder="ejemplo@servidor.com" id="correo"> </div>
            <div class="div12"></div>

            <div class="div4">Contrasena</div><div class="div4"></div>
            <div class="div8"><input type="password" placeholder="Al menos 6 caracteres" id="pass"> </div>
            <div class="div12"></div>

            <div class="div4">Dirección</div>
            <div class="div8"><input type="text" placeholder="presiona aqui para ingresar" id="dir1" onclick="irAMapa(this.id)"> </div>
            <!-- AQUI DEBES PONER EN VEZ DE ONCLICK="GETDIRECCION" PONES UN ONCLICK="PAGINA('MAPA.HTML')" -->
            <div class="div12"></div>

            <div class="div4">Numero Telefonico</div>
            <div class="div8"><input maxlength="25" type="text" placeholder="10 Digitos" id="telefono"></div>
            <div class="div12"></div>

            <div class="div12"></div>
            <div class="div3"></div><div class="div4"><button onclick="pagina('index.html')">Regresar</button></div><div class="div4"><button onclick="guardar()">Guardar</button></div>
        </form>

    </div>
</body>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBSMBr3VrhTjzUOGe0kKcOyj7u-h5--fok&callback=initMap"
  type="text/javascript"></script>
  <script>
    window.addEventListener('load',cargarDatosReg,true);
</script>
</html>

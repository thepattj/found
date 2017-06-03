<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" type="text/css" href="estilo.css">
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
    <script src="js/funciones.js"></script>
</head>
<nav>
   <img id="ima1" onclick="regreso()" src="img/atras1.png">
</nav>

<body>
    <div class="pantalla-reg">
       <div class="div3"></div><div class="div4"><h2>REGISTRATE</h2></div><div class="div4"></div><div class="div12"></div>
       
        <form onsubmit="return false">
            <div class="div4">Nombre</div>
            <div class="div8"><input type="text" placeholder="Nombre(s) Apellido" id="nombre"></div>
            <div class="div12"></div>

            <div class="div4">Correo</div>
            <div class="div8"><input type="text" placeholder="ejemplo@servidor.com" id="correo"> </div>
            <div class="div12"></div>

            <div class="div4">Contrasena</div><div class="div4"></div>
            <div class="div8"><input type="text" placeholder="Al menos 6 caracteres" id="pass"> </div>
            <div class="div12"></div>

            <div class="div4">Dirección</div>
            <div class="div8"><input type="text" placeholder="presiona aqui para ingresar" id="direccion"> </div>
            <div class="div12"></div>

            <div class="div4">Numero Telefonico</div>
            <div class="div8"><input maxlength="25" onkeypress="return valida(event)" type="text" placeholder="10 Digitos" id="telefono"></div>
            <div class="div12"></div>

            <div class="div4">Etiqueta de Direccion</div>
            <div class="div8"><input type="text" placeholder="Maximo 25 caracteres"></div><div class="div4"></div>
            <div class="div12"></div>
            <div class="div4"></div><div class="div6"><button onclick="guardar()">Guardar</button></div>
        </form>
    </div>
</body>
<footer>
    Aviso de Privacidad Terminos y condiciones FF© 2017
</footer>
</html>

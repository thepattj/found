<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" type="text/css" href="estilo.css">
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
    <script src="js/funciones.js"></script>
   <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASQKvbTGUZ1Ds6TTJJXJAuicT0ejXwNpw">
    </script>
</head>
<body>
    <div class="buscador">
        <input type="text" placeholder="calle, numero, estado" id="direccion2">
    </div>
    <div id="map" class="mapa"></div>
</body>
<footer>
    <div class="divfooter">
        <img id="imagenb" src="img/bru1.png">
    </div>
    <div class="divfooter">
        <img id="imagenl" src="img/list4.png">
    </div>
    <div class="divfooter">
        <img id="imagenc" src="img/car2.png">
    </div>
    <div class="divfooter">
        <img id="imagens" src="img/sett2.png">
    </div>
    <div class="divfooter">
        <img onclick="regreso()" id="imagenr" src="img/atras2.png">
    </div>
</footer>
</html>


 <script>

    //AGREGAR FUNCION DE LA GEOLOCALIZACION QUE DARA LA VARIABLE ULURU
      function initMap() {
        var uluru = {lat: 20.7045399, lng: -100.4433768};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtVWb6XTC-uO4jh4YlVmeDA44ojeQ-5qQ&callback=initMap">
    </script>
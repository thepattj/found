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
<nav>
    <div class="div4">
        <img id="imagenc" src="img/car1.png">
    </div>
    <div class="div4">
        <img id="imagens" src="img/sett1.png">
    </div>
    <div class="div4">
        <img onclick="regreso()" id="imagenr" src="img/atras2.png">
    </div>
</nav>

<body>
    <div class="buscador">
        <input type="text" placeholder="calle, numero, estado" id="direccion2">
    </div>
    <div class="mapa"></div>
</body>
<footer>
    <div class="div6">
        <img id="imagenb" src="img/bru2.png">
    </div>
    <div class="div6">
        <img id="imagenl" src="img/list.png">
    </div>
</footer>
</html>


<script>
    var map = null;
	var marker = null;
	var geocoder = new google.maps.Geocoder();
    
    function load_mapDO(){
        var myLatlng = new google.maps.LatLng(20.5920203, -100.39190329999997);
		var myOptions = {
			zoom: 14,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
        var markerOptions = {
			position: myLatlng,
			draggable: true,
			title: "Ubicación"
		}
        map = new google.maps.Map(document.getElementById("mapa"), myOptions);
        marker = new google.maps.Marker(markerOptions);
		marker.setMap(map);
        
        google.maps.event.addListener(marker, 'dragend', function(a) {
				lati= marker.getPosition().lat();
				long = marker.getPosition().lng();
				var linea = lati+", "+long;
		});
    
    }
</script>
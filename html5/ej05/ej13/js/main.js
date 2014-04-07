$(document).ready(function() {
    // Calcular posición
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function (position) {
            var coords = position.coords;
            showMap(position);
        },function(error) {
            console.log(error.message);
        }, {
            enableHighAccuracy: true
        });
    }

    function showMap(position) {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('article').appendChild(mapcanvas);

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "¡Usted está aquí!"
        });
        var coordenadas = document.createElement('div');
        document.querySelector('article').appendChild(coordenadas);
        console.log("La latitud es: "+latlng.A);
        console.log("La longitud es: "+latlng.k);
        alert(position.coords.accuracy);
        console.log(position.coords.accuracy);

    }
});
var json;
var $this = $(this);
var programa;
var jugador;
var reto;
$(document).on('ready', function(e){

    $.getJSON('show.json', function(resp) {
        var contenido = JSON.stringify(resp);
        localStorage.setItem('contenidoJson', contenido);
    });

    json = JSON.parse(localStorage.getItem('contenidoJson'));

    programa = json.id;
    $('#programa').append(programa);
    jugador = json.players[0];
    jugadores = json.players.length;
    reto = jugador.challenges[0];
    retos = jugador.challenges.length;

    $("#player_info").append("<p>El nombre del jugador actual es "+jugador.player.name+" y tiene "+json.players[0].player.age+" años"+"</p>");
    $("#player_info").append("<img src='"+ jugador.player.photo+"' />");

    $('#option1').append("<h4>"+reto.option1.name+"</h4><img src='"+reto.option1.photo+"' />");
    $('#option2').append("<h4>"+reto.option2.name+"</h4><img src='"+reto.option2.photo+"' />");

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    var db = null;

    function onerror(e) {
        console.log('error');
    }

    function open () {
        var version = 2;
        var request = indexedDB.open("programa", version);

        request.onupgradeneeded = function(e) {
            db = e.target.result;
            console.log(db);
            if(db.objectStoreNames.contains('programa')) db.deleteObjectStore("programa");

            var store = db.createObjectStore("programa", { keyPath: "timeStamp"});
        };

        request.onerror = onerror;

        request.onsuccess = function(e) {
            db = e.target.result;
            console.log("DB opened");
        };
    }

    function init() {
        open();
    }

    window.addEventListener("DOMContentLoaded", init, false);

    $(document).on('click','.option',function(){

        var transaction = db.transaction(["programa"], "readwrite");
        var store = transaction.objectStore("programa");
        var seleccion = $(this).data();
        var data = {
            "timeStamp": new Date().getTime(),
            "seleccion": seleccion
        };
        console.log(data);

        var request = store.put(data);

        request.onsuccess = function(e) {
            console.log("Sucessful add: "+e);
            if (reto < retos){
                reto = reto +1;
            }
            else{
                reto = 0;
                if (jugador < jugadores){
                    jugador = jugador + 1;
                }
            }
        };

        request.onerror = function(e) {
            console.log("Error adding: ", e);
        };
    });
});



$(document).on('click','#mostrarencuesta',function(){
    $("#main").load("views/encuesta.html");
    $("#extra_info").css("display", "none");
    $('#mostrarencuesta').css("display", "none");
});

$(document).on('click','#mostrarmapa', function(){
        $("#mapcontainer").css("display", "block");
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
    else {alert('Su navegador no dispone de geolocalización');}

    function showMap(position) {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('#mapcontainer').appendChild(mapcanvas);

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
            title: "Esta es su posición actual"
        });
        marker.setIcon('images/player_icon.png');

        var latlng_concurso = new google.maps.LatLng(json.players[0].challenges[0].place.latitude, json.players[0].challenges[0].place.longitude);
        var marker_concurso = new google.maps.Marker({
            position: latlng_concurso,
            map: map,
            title: "Esta es su posición actual"
        });
        marker_concurso.setIcon('images/game_icon.png');
    }
});

$(function(){
    "use strict";

    //Ocultar todos los elementos div.module;
    var $modulos = $('div.module');
    $modulos.hide();

    //Crear una lista desordenada antes del primer div.module para utilizar como pestañas;
    var $new = $('<ul/>');
    $new.insertBefore($modulos.first());

    var $lis =[];
    //Interactuar con cada div utilizando $.fn.each. Por cada uno, utilizar el texto del elemento h2 como el texto para el ítem de la lista desordenada;
    $modulos.each(function(){
        var $div = $(this);
        var $nombre = $div.find('h2').text();
        var $li = $('<li/>', {
            'text' : $nombre
        });

        $li.data('div', $div);

        $lis.push($li.get(0));
    });

    $new.append($lis);

    //Vincular un evento click a cada ítem de la lista de forma que
    //Muestre el div correspondiente y oculte el otro;
    //Añada la clase "current" al ítem seleccionado;
    //Remueva la clase "current" del otro ítem de la lista;:
    $new.on('click','li', function(){
        var $li = $(this);
        var $div = $li.data('div');
    });

});
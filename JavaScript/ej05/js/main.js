(function(){
    "use strict";

    // Número de enlaces que hay en la página
    var enlaces = document.getElementsByTagName('a');
    console.log(enlaces.length);

    enlaces = document.querySelectorAll('a');
    console.log(enlaces.length);

    console.log(enlaces);

    // Dirección a la que enlaza el penúltimo enlace
    var enlace = enlaces[enlaces.length-2];
    console.log(enlace.href);

    //Segunda opción (no funciona)
    //enlaces = document.querySelectorAll('p:nth-last-of-type a:nth-last-child(1)');
    //if(enlaces.length >0)
    //console.log(enlaces[0].href);

    //Cantidad de enlaces que apuntan a http://prueba
    var count= 0;
    for (var i = enlaces.length - 1; i >= 0; i--) {
        if (enlaces[i].href === "http://prueba/")
            count++;
    }
    console.log(count);

    enlaces= document.querySelectorAll('a[href="http://prueba"]');
    console.log(enlaces.length);

    //Número de enlaces del tercer párrafo
    var parrafos = document.querySelectorAll('body > p');
    if (parrafos.length>=3) {
        enlaces = parrafos[2].querySelectorAll('a');
        console.log(enlaces.length);
    }

    //Segunda opción
    enlaces = document.querySelectorAll('body >p:last-child-of-type a');
    console.log(enlaces);
})();
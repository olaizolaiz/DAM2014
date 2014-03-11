 //var anade = (function(){
    //"use strict";


    //var anade = function (){

        //var lista = document.querySelectorAll('#lista');

        //if (lista) {
            //var nuevoLi = document.createElement ("li");
            //var contenido = document.createTextNode("Hola Mundo!");
            //nuevoLi.appendChild(contenido);
            //lista[0].appendChild(nuevoLi);
        //}


    //};

    //return anade;
//})();

// SOLUCION ARKAITZ:

window.$ = Element.prototype.$ = function(selector) {
    var that = (this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);

    return (elems.length === 1) ? elems[0] : elems;
};

var anade = (function(){
    "use strict";

    var lista = $('#lista'),
        lis = lista.children,
        count = lista.children.length;

    var mostrarTexto = function(e) {
        console.log(this);
        console.log(e);
    };

    for (var i = lis.length - 1; i >= 0; i--) {
        lis[i].addEventListener('click', mostrarTexto );
    }

    var anade = function () {
        var li = document.createElement('li');
        li.innerText = "Element " + (++count);
        lista.appendChild(li);
    };
    return anade;
})();
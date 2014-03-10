 var APP = APP || {};
 APP.validarDNI = (function(){
    "use strict";

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var validarLongitud = function(dni) {
        return dni && dni.length == 9;
    };

    var validarNumero = function (dni) {
        var num = dni && parseInt (dni); //Se queda con la parte numérica

        return !isNaN(num) && num > 0 && num <= 99999999;
    };

    var validarLetra = function(dni) {
        var letra = dni.charAt(dni.length-1);
        var num = parseInt(dni);

        var index = num % 23;

        return letras[index] === letra;
    };

    var validarDNI = function (dni) {
        return validarLongitud(dni) && validarNumero(dni) && validarLetra(dni);
    };

    return validarDNI;

})();

console.log(APP.validarDNI('45686393L'));
console.log(APP.validarDNI('72494365K'));
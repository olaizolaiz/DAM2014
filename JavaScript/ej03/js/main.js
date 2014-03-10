 var APP = APP || {};
 APP.validarCadena = (function(){
    "use strict";

    var validarMayus = function (cadena) {
        return cadena && (cadena === cadena.toUpperCase());
    };

    var validarMinus = function (cadena) {
        return cadena && (cadena === cadena.toLowerCase());
    };

    var validarCadena = function (cadena) {
        if (validarMayus(cadena)) {
            return "Todo son mayúsculas";
        }
        else if (validarMinus(cadena)) {
            return "Todo son minúsculas";
        }
        else return "Hay mezcla de minúsculas y mayúsculas";
    };

    return validarCadena;

})();

console.log(APP.validarCadena('FFFFFd'));
console.log(APP.validarCadena('aaaaaaaa'));
console.log(APP.validarCadena('AAAA'));
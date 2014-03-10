 var APP = APP || {};
 APP.palindromo = (function(){
    "use strict";

        var palindromo = function (palabra) {
            palabra = palabra.trim().replace(/ /gi, "").toLowerCase();
            var pal = palabra.split("").reverse().join("");

            return pal === palabra;
        };

    return palindromo;

})();

console.log(APP.palindromo('aga'));
console.log(APP.palindromo('agg'));
console.log(APP.palindromo('La ruta nos aporto otro paso natural'));
 var APP = APP || {};
 APP.validator= (function(){
    "use strict";

    var validator = {

        required : function(valor) {
            return valor !== undefined && valor !== null && valor.trim().length > 0 && valor.length > 0;
        },
        password: function(valor){
            var longitudmin = this.required(valor) && valor.length>=6;

            var may = /[A-Z]/;
            var min = /[a-z]/;
            var num = /[0-9]/;

            return longitudmin && may.test(valor) && min.test(valor) && num.test(valor);
        },
        email: function(valor){
            var email = /^(\w+)((\.|-)(\w+))*@(\w+)(\.\w{2,})+$/;
            return this.required(valor) && email.test(valor);
        },
        min : function (valor, tam){

            return valor.length<=tam;
        }
    };

    return validator;

})();

//console.log(APP.validator.required("dsfgds") === true);
//console.log(APP.validator.required("") === false);
//console.log(APP.validator.required() === false);
//console.log(APP.validator.required("     ") === false);
//console.log(APP.validator.required(null) === false);

var  validateForm = (function(){
    "use strict";

    var nombre = document.getElementById ('registro_nombre');
    var apellido = document.getElementById('registro_apellido');

    var validarRequired = function (){
        APP.validator.required(nombre.value);

        if (!APP.validator.required(nombre.value)) nombre.className = "error";

        return APP.validator.required(nombre.value) && APP.validator.required(apellido.value);
    };

    nombre.addEventListener('blur', validarRequired);
    apellido.addEventListener('blur', validarRequired);

    var email = document.getElementById ('registro_email');

    var validarEmail = function (){
        APP.validator.email(email.value);

        return APP.validator.email(email.value);
    };

    email.addEventListener('blur', validarEmail);

    var password = document.getElementById('registro_password');

    var validarPassword = function (){
        APP.validator.password(password.value);

        return APP.validator.password(password.value);
    };

    password.addEventListener('blur', validarPassword);

    var comentarios = document.getElementById('registro_comentarios');

    var validarComentarios = function () {
        APP.validator.min(comentarios.value, comentarios.dataset.max);

        return APP.validator.min(comentarios.value, comentarios.dataset.max);
    };

    comentarios.addEventListener('blur', validarComentarios);

    var condiciones = document.getElementById('registro_condiciones');

    var validarCondiciones = function (){
        return condiciones.checked;
    };

    condiciones.addEventListener('blur', validarCondiciones);

    var enviar = document.getElementById('registro');

    var validarEnvio = function (e){
        if (validarRequired() && validarEmail() && validarComentarios() && validarPassword() && validarCondiciones()){
            console.log('Datos correctos');
        }
        else{
            console.log('Datos erróneos');
            e.preventDefault();
        }
    };

    enviar.addEventListener('submit', validarEnvio);

})();

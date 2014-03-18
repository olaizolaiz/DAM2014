HTMLFormElement.prototype.validator = function(opts){

    var form = this; // var form = $('#registro');
    var inputs = form.querySelectorAll('[data-validator]');
    var errores = [];

    var validarRequired = function(event) {
        // this === $('input#registro_nombre');
        if (this.type === 'checkbox'){
            if (!this.checked) {
                mensajeError(this, opts.required.error);
                errores.push('error');
            }
            else {
                borrarMensaje(this);
            }

        }
        if (!APP.validator.required(this.value)){
            mensajeError(this, opts.required.error);
            errores.push('error');
        } else {
            borrarMensaje(this);
        }
    };

    var validarEmail = function (){
        if (!APP.validator.email(this.value)){
            mensajeError(this, opts.email.error);
            errores.push('error');
        } else {
            borrarMensaje(this);
        }
    };

    var validarPassword = function (){

        if (!APP.validator.password(this.value)){
            mensajeError(this, opts.password.error);
            errores.push('error');
        } else {
            borrarMensaje(this);
        }
    };

    var validarComentarios = function () {
        if (!APP.validator.min(this.value,this.dataset.max)){
            mensajeError(this, opts.min.error);
            errores.push('error');
        } else {
            borrarMensaje(this);
        }
    };

    var validarEnvio = function (e){
        for (var i = inputs.length - 1; i >= 0; i--) {
            switch(inputs[i].dataset.validator){
                case 'required' : validarRequired.call(inputs[i]);break;
                case 'email' : validarEmail.call(inputs[i]);break;
                case 'password' : validarPassword.call(inputs[i]);break;
                case 'min' : validarComentarios.call(inputs[i]);break;
            }
        }

        if(errores.length > 0)
            e.preventDefault();
    };

    var mensajeError = function(node, mensaje){
        var span = document.createElement('span');

        span.className = 'error_span';
        span.innerText = mensaje;

        if (node.nextSibling){
            node.parentNode.insertBefore(span, node.nextSibling);
        }
        else{
            node.parentNode.appendChild(span);
        }
    };

    var borrarMensaje = function(node){

    };


    form.addEventListener('submit', validarEnvio);
    for (var i = inputs.length - 1; i >= 0; i--) {
        switch(inputs[i].dataset.validator){
            case 'required' : inputs[i].addEventListener('blur', validarRequired); break;
            case 'email' : inputs[i].addEventListener('blur', validarEmail); break;
            case 'password' : inputs[i].addEventListener('blur', validarPassword); break;
            case 'min' : inputs[i].addEventListener('blur', validarComentarios); break;
        }
    }

};
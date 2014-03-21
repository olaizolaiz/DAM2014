(function($){

    var errores = [];
    $.fn.validate = function(valor){

        return this.filter('form').each(function(){
            var $form = $(this);

            $form.on('submit', validarFormulario);
            $form.find(':input[data-validator=required]').on('blur', validarRequired);
            $form.find(':input[data-validator=email]').on('blur', validarCampos('email'));
            $form.find(':input[data-validator=min]').on('blur', validarCampos('min'));
            $form.find(':input[data-validator=password]').on('blur', validarCampos('password'));
        });

        // var target = this.dataset.target;
        // var $target = $(this).data('target');

        // return this.filter($target='required').each(function(){
        //     var valor = valor || valor.length >0 ;
        // });

    };

    var validarFormulario = function(e) {
        var $form = $(this),
            $inputs = $form.find(':input[data-validator]');

        $inputs.each(function(){
            switch(this.dataset.validator) {
                case 'required' : validarRequired.call(this); break;
                case 'email' : validarEmail.call(this); break;
                case 'password' : validarPassword.call(this); break;
                case 'min' : validarComentarios.call(this); break;
            }
        });

        if(errores.length > 0){
            errores =[];
            console.log('El mensaje no se ha enviado');
            e.preventDefault();
        }
        else {
            e.preventDefault();
            console.log('El mensaje se ha enviado');
        }
    };

    var validarRequired = function(event) {
        // this === $('input#registro_nombre');
        if (this.type === 'checkbox'){
            if (!this.checked) {
                //mensajeError(this, opts.required.error);
                errores.push('error');
            }
            else {
                //borrarMensaje(this);
            }

        }
        if (!validator.required(this.value)){
            // mensajeError(this, opts.required.error);
            errores.push('error');
            console.log('Campo requerido');
        } else {
            // borrarMensaje(this);
        }
    };

    var validarCampos = function (validador){
         if (!validator.validador){
            //mensajeError(this, opts.email.error);
            errores.push('error');

            switch(validador) {
                case 'email' : console.log('Campo de email'); break;
                case 'password' : console.log('Campo de password'); break;
                case 'min' : console.log('Campo de comentarios'); break;
            }
        }
        else {
            //borrarMensaje(this);
        }
    };

    var validarEmail = function (){
        if (!validator.email(this.value)){
            //mensajeError(this, opts.email.error);
            errores.push('error');
            console.log('Campo de email');
        } else {
            //borrarMensaje(this);
        }
    };

    var validarComentarios = function () {
        if (!validator.min(this.value,this.dataset.max)){
            //mensajeError(this, opts.min.error);
            errores.push('error');
            console.log('Campo de comentarios');
        } else {
            //borrarMensaje(this);
        }
    };

    var validarPassword = function (){

        if (!validator.password(this.value)){
            //mensajeError(this, opts.password.error);
            errores.push('error');
            console.log('Campo de password');
        } else {
            //borrarMensaje(this);
        }
    };

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

})(jQuery);

// $(document).on('blur','form input', function(){
//     $this = $(this);
//     $this.required($this.value);
// });

// $('form').validate().stripe().addClass('formulario');
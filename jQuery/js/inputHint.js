$(function(){
    "use strict";

    //Establecer el valor del elemento input igual al valor del elemento label
    var $input = $('input.input_text');
    var $label = $input.closest('form').find('label[for=q]');


    $input.val($label.text()).addClass('hint');
    $label.remove();

    var $valorinput = $input.val();

    $input.on('focus', function(e){
        // Comprobar que el texto no es el de origen
        if (($input).val()=== $valorinput){
            $input.val('');
            $input.removeClass('hint');
        }
    });

    $input.on('blur', function(e){
        // Comprobar si es vacio
        if (($input).val()=== ''){
            $input.val($label.text());
            $input.addClass('hint');
        }
    });

});
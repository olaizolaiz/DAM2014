$(function(){
    $(document).on('click', '#comprobar', function(e){
        var $usuario = $('#login').val();

        $.ajax({
            url: "../servidor/compruebaDisponibilidadJSON.php",
            data: { login : $usuario },
            type: "POST",
            dataType: "json",
            success: function(resp){
                $('#disponibilidad').empty().append('¿Está el nombre de usuario disponible? ' + resp.disponible);
                if (resp.disponible == 'no'){
                    var $ul = $('<ul/>').appendTo($('#disponibilidad'));

                    var $lis =[];
                    $.each( resp.alternativas, function(idx, value) {
                        $lis.push('<li>' + value + '</li>');
                    });

                    $ul.append($lis.join(''));
                }
            }
        });
    });
});
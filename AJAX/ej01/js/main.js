$(function(){
    $(document).on('ready', function(e){
        var $this = $(this);
        $this.find('form #recurso').val(window.location);

    });
    $(document).on('click', '#enviar', function(e){
        var $this = $(this);
        var $url = $this.find('#recurso').val();
        $.ajax({
            url : $url,
            data : { data : $url },
            dataType: 'text',
            cache: false,
            beforeSend: function(){
                //mostrarEstado(estado);
                //console.log('enviando');
            },
            success: function(data, textStatus, jqXHR) {
                mostrarContenido(data);
                $('#codigo').append('<span>' +jqXHR.statusCode().status + '</span><br>');
                $('#codigo').append('<span>' + jqXHR.statusText + '</span><br>');
                $('#cabeceras').append('<span>' +jqXHR.statusCode().getAllResponseHeaders() + '</span><br>');
            },
            error : function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
        var mostrarContenido = function(contenido){
            $("#contenidos").text(contenido);
        };
    });

});
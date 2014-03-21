$(function(){
    $(document).on('change', 'select[name=day]' ,function(e){
        var $this = $(this);

        //Podemos hacer la petición de varias maneras

        console.log($this.val());
        //$.getJSON('data/specials.json',
        //    { data : $this.val()},
        //    function(data, textStatus, jqXHR){
        //        console.log(data);
        //        console.log(textStatus);
        //        console.log(jqXHR);
        //});

        $.ajax({
            url : 'data/specials.json',
            data : { data : $this.val() },
            dataType: 'json',
            cache: false,
            success: function(data, textStatus, jqXHR) {
                console.log(data);
                mostrarContenido(data);
            },
            error : function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });

        var mostrarContenido = function(contenido){

        };
    });
});
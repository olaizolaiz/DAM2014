$(function(){
    var refreshIntervalId = setInterval(ajaxCall, 1000);

    function ajaxCall() {
        $.get('../servidor/generaContenidos.php',  function(resp) {
        var timestamp = new Date().getTime();
        $('#ticker').text(timestamp + ' ' + resp);
        });
    }
    var $detenido = 0;

    $(document).on('click', '#detener', function(e){
        if($detenido != 1) {
            clearInterval(refreshIntervalId);
            $detenido = 1;
        }
        else {
            refreshIntervalId = setInterval(ajaxCall,1000);
        }
    });

    $(document).on('click', '#siguiente', function(e){
    });
    $(document).on('click', '#anterior', function(e){
    });
});
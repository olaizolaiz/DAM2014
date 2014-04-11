$(function () {
    "use strict";

    // Obtener los elementos del DOM

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;
    var open = false;

    var $input = $("#input");

    // Comprobar la disponibilidad de Web Socket en el navegador
    if(Modernizr.websocket) {
        return false;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');

    socket.onopen  = function(e){
        console.log('WebSocket abierto');

        $("#status").text("Introduzca nick");
        $("#input").prop('disabled', false);
        open = true;
    };

    socket.onerror = function(){
        console.log('Error al abrir el socket.');
    };

    socket.onclose = function(){
        console.log('Socket cerrado');
    };

    socket.onmessage = function(event) {
        var resp = JSON.parse(event.data);
        if (resp.type === 'color') {
            $("#status").text(myName).css('color', resp.data);
            /*initiliseChat();*/
        } else if(resp.type === 'history'){
            // Mostrar todos los mensajes
            console.log(resp);
        } else if(resp.type === 'message'){
            // Añadir solo un mensaje
            console.log(resp);
        }
    };

    $(document).keypress(function(e) {
        if(e.which === 13 && open) {
            var text = $("#input").val();

            if(!myName)
                myName = text;

            if (text && text!==null && text.length>0){
                socket.send(text);
                $input.val('');
            }
        }
    });

    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escuchar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    /**
     * Añadir el mensaje a la ventana de chat

    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ': ' + message + '</p>');
    }
     */
});
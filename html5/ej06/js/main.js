/* $(document).ready(function() {
    $('#contenido').html(sessionStorage.getItem('contenidoParrafo'));
});

function guardar() {
        var contenidoEditado   = $('#contenido').html();
        sessionStorage.setItem('contenidoParrafo', contenidoEditado);
        console.log(sessionStorage.getItem('contenidoParrafo'));
} */

/* Con localStorage el código sería parecido: */

 $(document).ready(function() {
    $('#contenido').html(localStorage.getItem('contenidoParrafo'));
});

function guardar() {
        var contenidoEditado   = $('#contenido').html();
        localStorage.setItem('contenidoParrafo', contenidoEditado);
        console.log(localStorage.getItem('contenidoParrafo'));
}

function handleStorage(event) {

 event = event || window.event; // support IE8

 if (event.newValue === null) { // it was removed



 } else {

    $('#contenido').html(localStorage.getItem('contenidoParrafo'));

 }

}

window.addEventListener('storage', handleStorage, false);
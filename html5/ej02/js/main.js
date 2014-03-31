
function negrita() {
    document.execCommand('bold',false,null);
}
function cursiva(){
    document.execCommand('italic',false,null);
}
function subrayar(){
    document.execCommand('underline', false, null);
}
function centrar(){
    document.execCommand('justifycenter', false, null);
}
$(document).ready( function() {

    if (localStorage.newContent){
        $('#contenido').html(localStorage.newContent);
    }

    $('#guardar').on('click', function(){
        var contenidoEditado   = $('#contenido').html();
        localStorage.newContent = contenidoEditado;
    });

});

Modernizr.load({

 test: Modernizr.inputtypes.datetime,

 yep : '',

 nope: 'js/datetime-polyfill.min.js'

});
var $lista = $('#lista');
if (Modernizr.inputtypes.email) {

    console.log('Input e-mail soportado');
    var funcionalidad = "email";
    var li = document.createElement('li');
    li.innerText = "El navegador soporta "+funcionalidad;
    document.getElementById('lista').appendChild(li);
} else {

    console.log('Input e-mail no soportado');
    var funcionalidad = "email";
    var li = document.createElement('li');
    li.innerText = "El navegador no soporta "+funcionalidad;
    document.getElementById('listano').appendChild(li);
}
if (Modernizr.inputtypes.url) {

    console.log('Input url soportado');
    var funcionalidad = "url";
    var li = document.createElement('li');
    li.innerText = "El navegador soporta "+funcionalidad;
    document.getElementById('lista').appendChild(li);
} else {

    console.log('Input url no soportado');
    var funcionalidad = "url";
    var li = document.createElement('li');
    li.innerText = "El navegador no soporta "+funcionalidad;
    document.getElementById('listano').appendChild(li);
}
if (Modernizr.inputtypes.date) {

    console.log('Input date soportado');
    var funcionalidad = "date";
    var li = document.createElement('li');
    li.innerText = "El navegador soporta "+funcionalidad;
    document.getElementById('lista').appendChild(li);
} else {

    console.log('Input date no soportado');
    var funcionalidad = "date";
    var li = document.createElement('li');
    li.innerText = "El navegador no soporta "+funcionalidad;
    document.getElementById('listano').appendChild(li);
}
if (Modernizr.inputtypes.time) {

    console.log('Input time soportado');
    var funcionalidad = "time";
    var li = document.createElement('li');
    li.innerText = "El navegador soporta "+funcionalidad;
    document.getElementById('lista').appendChild(li);
} else {

    console.log('Input time no soportado');
    var funcionalidad = "time";
    var li = document.createElement('li');
    li.innerText = "El navegador no soporta "+funcionalidad;
    document.getElementById('listano').appendChild(li);
}
if (Modernizr.inputtypes.datetime) {

    console.log('Input datetime soportado');
    var funcionalidad = "datetime";
    var li = document.createElement('li');
    li.innerText = "El navegador soporta "+funcionalidad;
    document.getElementById('lista').appendChild(li);
} else {

    console.log('Input datetime no soportado');
    var funcionalidad = "datetime";
    var li = document.createElement('li');
    li.innerText = "El navegador no soporta "+funcionalidad;
    document.getElementById('listano').appendChild(li);
}
if (Modernizr.inputtypes.month) {

    console.log('Input month soportado');
    var funcionalidad = "month";
    var li = document.createElement('li');
    li.innerText = "El navegador soporta "+funcionalidad;
    document.getElementById('lista').appendChild(li);
} else {

    console.log('Input month no soportado');
    var funcionalidad = "month";
    var li = document.createElement('li');
    li.innerText = "El navegador no soporta "+funcionalidad;
    document.getElementById('listano').appendChild(li);
}
if (Modernizr.inputtypes.week) {

    console.log('Input week soportado');
    var funcionalidad = "week";
    var li = document.createElement('li');
    li.innerText = "El navegador soporta "+funcionalidad;
    document.getElementById('lista').appendChild(li);
} else {

    console.log('Input week no soportado');
    var funcionalidad = "week";
    var li = document.createElement('li');
    li.innerText = "El navegador no soporta "+funcionalidad;
    document.getElementById('listano').appendChild(li);
}
if (Modernizr.inputtypes.number) {

    console.log('Input number soportado');
    var funcionalidad = "number";
    var li = document.createElement('li');
    li.innerText = "El navegador soporta "+funcionalidad;
    document.getElementById('lista').appendChild(li);
} else {

    console.log('Input number no soportado');
    var funcionalidad = "number";
    var li = document.createElement('li');
    li.innerText = "El navegador no soporta "+funcionalidad;
    document.getElementById('listano').appendChild(li);
}
if (Modernizr.inputtypes.range) {

    console.log('Input range soportado');
    var funcionalidad = "range";
    var li = document.createElement('li');
    li.innerText = "El navegador soporta "+funcionalidad;
    document.getElementById('lista').appendChild(li);
} else {

    console.log('Input range no soportado');
    var funcionalidad = "range";
    var li = document.createElement('li');
    li.innerText = "El navegador no soporta "+funcionalidad;
    document.getElementById('listano').appendChild(li);
}
if (Modernizr.inputtypes.tel) {

    console.log('Input tel soportado');
    var funcionalidad = "tel";
    var li = document.createElement('li');
    li.innerText = "El navegador soporta "+funcionalidad;
    document.getElementById('lista').appendChild(li);
} else {

    console.log('Input tel no soportado');
    var funcionalidad = "tel";
    var li = document.createElement('li');
    li.innerText = "El navegador no soporta "+funcionalidad;
    document.getElementById('listano').appendChild(li);
}
if (Modernizr.inputtypes.search) {

    console.log('Input search soportado');
    var funcionalidad = "search";
    var li = document.createElement('li');
    li.innerText = "El navegador soporta "+funcionalidad;
    document.getElementById('lista').appendChild(li);
} else {

    console.log('Input search no soportado');
    var funcionalidad = "search";
    var li = document.createElement('li');
    li.innerText = "El navegador no soporta "+funcionalidad;
    document.getElementById('listano').appendChild(li);
}
if (Modernizr.inputtypes.color) {

    console.log('Input color soportado');
    var funcionalidad = "color";
    var li = document.createElement('li');
    li.innerText = "El navegador soporta "+funcionalidad;
    document.getElementById('lista').appendChild(li);
} else {

    console.log('Input color no soportado');
    var funcionalidad = "color";
    var li = document.createElement('li');
    li.innerText = "El navegador no soporta "+funcionalidad;
    document.getElementById('listano').appendChild(li);
}
if (Modernizr.inputtypes.number) {

    console.log('Input number soportado');
    var funcionalidad = "number";
    var li = document.createElement('li');
    li.innerText = "El navegador soporta "+funcionalidad;
    document.getElementById('lista').appendChild(li);
} else {

    console.log('Input number no soportado');
    var funcionalidad = "number";
    var li = document.createElement('li');
    li.innerText = "El navegador no soporta "+funcionalidad;
    document.getElementById('listano').appendChild(li);
}
if (Modernizr.inputtypes.file) {

    console.log('Input file soportado');
    var funcionalidad = "file";
    var li = document.createElement('li');
    li.innerText = "El navegador soporta "+funcionalidad;
    document.getElementById('lista').appendChild(li);
} else {

    console.log('Input file no soportado');
    var funcionalidad = "file";
    var li = document.createElement('li');
    li.innerText = "El navegador no soporta "+funcionalidad;
    document.getElementById('listano').appendChild(li);
}
if (Modernizr.inputtypes.password) {

    console.log('Input password soportado');
    var funcionalidad = "password";
    var li = document.createElement('li');
    li.innerText = "El navegador soporta "+funcionalidad;
    document.getElementById('lista').appendChild(li);
} else {

    console.log('Input password no soportado');
    var funcionalidad = "password";
    var li = document.createElement('li');
    li.innerText = "El navegador no soporta "+funcionalidad;
    document.getElementById('listano').appendChild(li);
}

if (Modernizr.video.h264){
    console.log('El navegador soporta formato h264 de vídeo');
    var codec = "h264";
    var li = document.createElement('li');
    li.innerText = "El navegador soporta el codec de vídeo "+codec;
    document.getElementById('listacodec').appendChild(li);
}
else{
    console.log('El navegador no soporta formato h264 de vídeo');
    var codec = "h264";
    var li = document.createElement('li');
    li.innerText = "El navegador no soporta el codec de vídeo "+codec;
    document.getElementById('listacodecno').appendChild(li);
}

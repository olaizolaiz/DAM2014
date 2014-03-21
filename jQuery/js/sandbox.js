$(function(){
    //Seleccionar todos los elementos div que poseen la clase "module".
    var $divs = $('div.module');
    console.log($divs);

    //Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista desordenada #myList. ¿Cuál es el mejor para utilizar? ¿Porqué?
    var $li = $('#myList li').eq(2);
    console.log($li[0]);
    $li = $('#myList').find('li').eq(2);
    console.log($li[0]);
    $li = $('#myList li:nth-child(3)');
    console.log($li[0]);
    $li = $('#myListItem');
    console.log($li[0]);

    //Seleccionar el elemento label del elemento input utilizando un selector de atributo.
    var $input = $('input.input_text');
    var $label = $input.closest('form')
                .find('label[for="' + $input.attr('name') + '"]');
    console.log($label);

    //Averiguar cuantos elementos en la página están ocultos (ayuda: .length)
    var $ocultos = $(':hidden');
    console.log($ocultos.length);

    //Averiguar cuantas imágenes en la página poseen el atributo alt.
    var $img = $('img[alt]');
    console.log($img.length);

    //Seleccionar todas las filas impares del cuerpo de la tabla y ponerles de color de fondo gris.
    //Hay que tener en cuenta que el índice empieza por 0. Por tanto, deberíamos usar even en vez de odd
    //var $filas = $('tbody tr:odd').css('background-color', 'gray');
    //console.log($filas);

    //Seleccionar todas las imágenes en la página; registrar en la consola el atributo alt de cada imagen.
    var $imgs = $('img[alt]');
    $imgs.each(function(idx,el){
        console.log('El elemento alt de la imagen número' + idx +' es ' + $(el).attr('alt')
        // También valdría sin poner idx ni el en los parámetros: console.log(this.alt);
            );
    });

    //Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.
    var $input2 = $('input');
    var $form = $input2.closest('form').addClass('clase');

    //Seleccionar el ítem que posee la clase "current" dentro de la lista #myList y remover dicha clase en el elemento; luego añadir la clase "current" al siguiente ítem de la lista.
    $('ul#myList .current').removeClass('current').next().addClass('current');

    //Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.
    $submit = $('#specials select').closest('form').find('input[type=submit]');

    //Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase "current" al mismo y luego añadir la clase "disabled" a los elementos hermanos.
    $('#slideshow li:first-child').addClass('current').siblings().addClass('disable');

    //Añadir 5 nuevos ítems al final de la lista desordenada #myList.
    var $lis =[];
    for (var i=5 - 1; i >= 0; i-- ) {
        $lis.push('<li>List item ' + i + '</li>');
    }
    var $myList = $('#myList');
    $myList.append($lis.join(''));

    //Remover los ítems impares de la lista.ç
    $('#myList li:even').remove();

    //Añadir otro elemento h2 y otro párrafo al último div.module.
    $('div.module:last')
        .append('<h2>Lorem ipsum</h2>')
        .append('<p>Lorem ipsum</p>');

    //Añadir otra opción al elemento select; darle a la opción añadida el valor "Wednesday".
   $('select[name=day]').append('<option value="wednesday">Wednesday</option>');

    //Añadir un nuevo div.module a la página después del último; luego añadir una copia de una de las imágenes existentes dentro del nuevo div.

    var $div = $('div.module').last();
    var $new = $('<div/>',{
        'class' : 'module',
        'id' : 'myModule'
    });
    $new.append($imgs.first().clone()).insertAfter($div);
});
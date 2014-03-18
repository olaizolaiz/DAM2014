$(document).ready(function(){

    var onSlideNext = function($slideElement, oldIndex, newIndex){
            console.log('Has pasado al siguiente slide');
        };
    var onSlidePrev = function($slideElement, oldIndex, newIndex){
            console.log('Has pasado al slide anterior');
    };
    var $slideshow = $('#slideshow').bxSlider({
        'mode': 'fade',
        'controls': false,
        'pager': false,
        onSlideNext: onSlideNext,
        onSlidePrev: onSlidePrev
    });

    $(document).on('click','.anterior', function(){
        //Si hubieramos puesto un enlace, tendríamos que pasar la e en la función y hacer e.preventDefault();
        var target = this.dataset.target;
        var $target = $(this).data('target');
        $slideshow.goToPrevSlide();
    });
    $(document).on('click','.siguiente', function(){
        $slideshow.goToNextSlide();
    });
    $(".fancybox").fancybox();

    //$slideshow.onSlideNext(function($slideElement, oldIndex, newIndex){

    //});

});

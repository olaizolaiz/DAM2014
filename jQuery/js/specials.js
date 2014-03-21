$(function(){
    $(document).on('change', 'select[name=day]' ,function(e){
        var $this = $(this);

        console.log($this.val());
    });
});
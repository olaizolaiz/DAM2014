$(document).ready(function(){
    $('#registro').validate({
        'required' : {
            'error' : 'This field is required',
            'class' : 'error col-12 txt-center'
        },
        'email' : {
            'error' : 'This e-mail is invalid',
            'class' : 'error col-12 txt-center'
        },
        'password' : {
            'error' : 'The password is not correct',
            'class' : 'error col-12 txt-center'
        },
        'min' : {
            'error' : 'The message is too long',
            'class' :  'error col-12 txt-center'
        }

    });
});
window.$ = Element.prototype.$ = function(selector) {
    var that = (this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);

    return (elems.length === 1) ? elems[0] : elems;
};

$('#registro').validator({
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

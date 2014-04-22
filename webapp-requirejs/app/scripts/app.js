define('app',[], function() {
  console.log('App started');
});

require(['FizzBuzz'], function () {
    'use strict';
    // use app here
    console.log('Llamando a FizzBuzz');
});
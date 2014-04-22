/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        nodeRequire: require
    });

    /* Before para cargar los módulos */
    describe('Give it some context', function () {
        var FizzBuzz;
        beforeEach(function(done){
            require(['FizzBuzz'], function(fb){
                FizzBuzz = fb;
                done();
            });
        });

        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
                assert.equal(1, FizzBuzz.testNumber(1));
            });
        });
    });
})();

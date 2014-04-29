/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths : {
            handlebars: '../bower_components/handlebars.js/dist/handlebars',
        },
        shim: {
            handlebars: {
                exports : 'Handlebars'
            }
        }
    });

    describe('Handlebars module', function () {
        var ui, ctrl, DB;

        beforeEach(function(done){
            require(['UI', 'Controller', 'Data'], function(UI, Controller, Data){
                ui = UI;
                ctrl = Controller;
                DB = Data;
                done();
            });
        });

        afterEach(function(done){
            done();
        });

        describe('#showTweetsList', function () {
            it('One tweet is correctly printed', function (done){
                ui.showTweetsList([
                    {
                        id : 1,
                        text : 'Tweet de prueba'
                    }
                ], function(){
                    assert.equal($('#twitter-list').children().length, 1);
                    done();
                });
                done();
            });
            it('All tweets are correctly printed', function (){
                DB.getAllTweets(function (tweets){
                    ui.showTweetsList(tweets)
                    assert.equal($('#twitter-list').children().length, 100);
                });
            });
        });
    });
})();
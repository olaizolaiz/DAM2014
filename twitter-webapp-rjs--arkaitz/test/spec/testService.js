/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths : {
            // pouchdb  : '../bower_components/pouchdb/dist/pouchdb-nightly',
            jquery: '../bower_components/jquery/dist/jquery',
        },
        shim : {
        }
    });

    describe('Service module', function () {
        var srv;
        var $;
        beforeEach(function(done){
            require(['Service', 'jquery'], function(service, jquery){
                srv = service;
                $ = jquery;
                sinon.spy($,'ajax');
                done();
            });
        });
        afterEach(function(){
            $.ajax.restore();
        });

        describe('#getTweets', function () {
            it('$.ajax has been called', function (done){
                srv.getTweets();
                assert.isTrue($.ajax.calledOnce);
                assert.equal('/app/data/tweets.json', $.ajax.firstCall.args[0].url);
                done();
            });
            it('Get all tweets from Twitter', function (done) {
                srv.getTweets({
                    apiKey: ''
                }, function(tweets){
                    if(tweets && tweets.statuses && tweets.statuses.length == 100){
                        done();
                    }
                    else {
                        throw "No se han obtenido los tweets";
                    }
                }, function(err){
                    throw err;
                });
            });
        });
    });
})();
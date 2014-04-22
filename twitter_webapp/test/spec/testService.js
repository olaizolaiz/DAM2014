/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../../app/scripts/',
        paths : {
            // pouchdb  : '../bower_components/pouchdb/dist/pouchdb-nightly',
            'jquery' : '../bower_components/ydn-db/jsc/ydn.db-dev',
        },
        shim : {
        }
    });

    describe('Service module', function () {
        var srv;

        beforeEach(function(done){
            require(['Service'], function(servuce){
                srv = service;
                done();
            });
        });

        describe('#getTweets', function () {
            it('Get all tweets from Twitter', function (done) {
                srv.getTweets();
                done()
            });
        });
    });
})();
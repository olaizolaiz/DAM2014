/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/'
    });

    describe('Controller module', function () {
        var ctrl, srv, DB;

        beforeEach(function(done){
            require(['Controller', 'Service', 'Data'], function(Controller, Service, Data){
                ctrl = Controller;
                srv = Service;
                DB = Data;
                //sinon.spy(ctrl, 'getTweetsFromTwitter');
                sinon.spy(srv, 'getTweets');
                sinon.spy(DB, 'addTweets');
                done();
            });
        });
        afterEach(function(done){
            srv.getTweets.restore();
            DB.addTweets.restore();
            done();
        });

        describe('#getTweetsFromTwitter', function () {
            it('Get all tweets from Twitter and save to DB', function (done){
                ctrl.getTweetsFromTwitter(function(){
                    assert.isTrue(srv.getTweets.calledOnce, 'getTweets not called');
                    DB.getAllTweets(function(tweets){
                        assert.equal(100, tweets.length);
                        done();
                    });
                });
                assert.isTrue(DB.addTweets.calledOnce, 'addTweets not called');
                done();
            });
        });
    });
})();
/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths: {
            'ydn-db' : '../bower_components/ydn-db/jsc/ydn.db-dev'
        },
        shim: {
            'ydn-db': {
                exports : 'ydn'
            }
        }
    });

    describe('DataBase module', function () {

        var DB;

        beforeEach(function(done){
            require(['data'], function(data){
                DB = data;
                done();
            });
        });

        describe('#put method', function () {
            it('Add some tweets', function (done) {
                DB.insertarTweet({id:'00002', text:'Texto del tweet'}, function(){
                    done();
                }, function(err){
                    throw err;
                });
            });
        });

        describe('#remove method', function () {
            it('Delete some tweets', function (done) {
                DB.eliminarTweet('00002', function(resp){
                    if (resp && resp>0){
                        console.log("Eliminado");
                        done();
                    } else {
                        console.log("No eliminado");
                        throw "No eliminado";
                    }

                }, function(err){
                    throw err;
                });
            });
        });

        describe('#get method', function () {
            it('Get some tweets', function (done) {
                DB.obtenerTweets('00002', function(resp){
                    if (resp == '00002'){
                        console.log("Get satisf");
                        done();
                    } else {
                        console.log("Get no satisf");
                        throw "No obtenido";
                    }
                }, function(err){
                    throw err;
                });
            });
        });
    });
})();

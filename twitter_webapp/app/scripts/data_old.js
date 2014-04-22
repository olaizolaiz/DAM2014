define('data',['ydn-db'], function(ydn) {
    'use strict';
    console.log('Data module started');
    var almacen = 'twitter-db';
    var db = new ydn.db.Storage(almacen);

    var insertarTweet = function(tweet, success, error){
        var req = db.put({name: almacen, keyPath: 'id'}, tweet);
        req.done(success);
        req.fail(error);
    };

    var eliminarTweet = function(id, success, error){
        var req = db.remove(almacen, id);
        req.done(success);
        req.fail(error);
    };

    var obtenerTweets = function(id, success, error){
        var req = db.get(almacen, id);
        req.done(success);
        req.fail(error);
    };

    /*
    var actualizarTweets = function(){

    };*/

    return{
        insertarTweet : insertarTweet,
        eliminarTweet : eliminarTweet,
        obtenerTweets : obtenerTweets
    };
});
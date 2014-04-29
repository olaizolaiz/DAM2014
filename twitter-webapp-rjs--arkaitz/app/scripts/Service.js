define('Service', ['jquery'], function($){
    console.log('Service module loaded');

    var getTweets = function(config, success, error){
        $.ajax ({
            url: '/app/data/tweets.json',
            dataType: 'json',
            success: success,
            error: function(jqXHR, textStatus, errorThrown){
                error(errorThrown);
            }
        });
    };
    return {
        getTweets : getTweets
    };
});
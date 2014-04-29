define('Controller', ['Data', 'Service', 'UI'], function(DB, srv, UI){
    'use strict';

    var getTweetsFromTwitter = function(success, error){
        srv.getTweets({}, function(data){
            processTweets(data, function(tweets){
                DB.addTweets(tweets, success, error);
                UI.showTweetsList(tweets);
            }, error);
        }, error);
    };

    var processTweets = function(data, success, error){
        var tweets =[];

        if(data && data.statuses && data.statuses.length > 0){
            for (var i = data.statuses.length - 1; i >= 0; i--) {
                var newtweet = {
                    id_tweet: data.statuses[i].id_str,
                    text: data.statuses[i].text,
                    name: data.statuses[i].user.name,
                    img: data.statuses[i].user.profile_image_url,
                    id: data.statuses[i].user.id
                };
                tweets.push(newtweet);
            }
            success(tweets);
        }
    };
    return{
        getTweetsFromTwitter : getTweetsFromTwitter
    };
});
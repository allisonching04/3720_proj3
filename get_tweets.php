<?php 
	require_once('TwitterAPIExchange.php');

	$settings = array(
	    'oauth_access_token' => "#",
	    'oauth_access_token_secret' => "#",
	    'consumer_key' => "#",
	    'consumer_secret' => "#"
	);


// 976557844022616068 = size tweet1
// 954489156654247936 = burger tweet2
// 976816837529923584 = recovery tweet3
	
	$url = 'https://api.twitter.com/1.1/statuses/lookup.json';
	$getfield = '?id=976557844022616068,954489156654247936,976816837529923584&tweet_mode=extended';
	$requestMethod = 'GET';

	$twitter = new TwitterAPIExchange($settings);
	echo $twitter->setGetfield($getfield)
	    ->buildOauth($url, $requestMethod)
	    ->performRequest();



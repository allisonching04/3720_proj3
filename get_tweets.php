<?php 
	require_once('TwitterAPIExchange.php');

	$settings = array(
	    'oauth_access_token' => "957769973627146240-zXdN20gAc72csJ9qD1Muc3oxPI3Eitz",
	    'oauth_access_token_secret' => "yZpbOY8XqwOTzt8GoTUinFPU1ALFskV4JKGw8V2mK9BN3",
	    'consumer_key' => "lqhsIJttV2JNn6kF3wvKiAofI",
	    'consumer_secret' => "qPVTVE7j98cNtmaCn3k7owRVJN7TDpzYW5SedTpc22VSMkirZK"
	);


	$url = 'https://api.twitter.com/1.1/statuses/show.json';
	$getfield = '?id=975892164533108736';
	$requestMethod = 'GET';

	$twitter = new TwitterAPIExchange($settings);
	echo $twitter->setGetfield($getfield)
	    ->buildOauth($url, $requestMethod)
	    ->performRequest();



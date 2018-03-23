

$(document).ready(function(){    
    init();
});

// //add JS

function init() {
	$('a').click(function(){  
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
    	return false;
  	});

	$('.RecoveryRanch').mouseover(function() {
		$('.resource-text01').addClass('open');
		$('.resource03').addClass('hide');
		$('.resource02').addClass('hide');
	});
	$('.RecoveryRanch').mouseout(function() {
    	$('.resource-text01').removeClass('open');
		$('.resource03').removeClass('hide');
		$('.resource02').removeClass('hide');
  	});
  	$('.Allure').mouseover(function() {
  		$('.resource-text03').addClass('open');
		$('.resource01').addClass('hide');
		$('.resource02').addClass('hide');
  	});
	$('.Allure').mouseout(function() {
    	$('.resource-text03').removeClass('open');
		$('.resource01').removeClass('hide');
		$('.resource02').removeClass('hide');
  	});

  	var think01 = $('.think01');
	var showTweet1 = $('.showTweet1');

	var think02 = $('.think02');
	var showTweet2 = $('.showTweet2');

	var think03 = $('.think03');
	var showTweet3 = $('.showTweet3');

	think01.click(function() {
		$(this).hide();
		showTweet1.show();
	});
	showTweet1.click(function() {
		$(this).hide();
		think01.show();
	});

	think02.click(function() {
		$(this).hide();
		showTweet2.show();
	});
	showTweet2.click(function() {
		$(this).hide();
		think02.show();
	});

	think03.click(function() {
		$(this).hide();
		showTweet3.show();
	});
	showTweet3.click(function() {
		$(this).hide();
		think03.show();
	});

	var tweet1 = document.getElementById("tweet1");
	var tweet2 = document.getElementById("tweet2");
	var tweet3 = document.getElementById("tweet3");

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'get_tweets.php', true);
	xhr.send(null);
	xhr.onload = function() {
		if(xhr.status == 200) {
			var tweets = JSON.parse(xhr.responseText);

			tweet1.innerHTML = "&quot;" + tweets[0].full_text + "&quot;";
			// tweet2.innerHTML = "&quot;" + tweets.statuses[0].created_at + "&quot;";
			tweet2.innerHTML = "&quot;" + tweets[1].full_text + "&quot;";
			tweet3.innerHTML = "&quot;" + tweets[2].full_text + "&quot;";

			// tweet2.innerHTML = "<img src=" + tweets.user.profile_image_url_https + ">";

			console.log(tweets);
		}
	}
}
	  


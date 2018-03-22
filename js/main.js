

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
		$('.resource-text02').addClass('open');
		$('.resource03').addClass('hide');
		$('.resource01').addClass('hide');
	});
	$('.Allure').mouseout(function() {
    	$('.resource-text02').removeClass('open');
		$('.resource03').removeClass('hide');
		$('.resource01').removeClass('hide');
  	});

	var think02 = $('.think02');
	var showTweet2 = $('.showTweet2');

	think02.click(function() {
		$(this).hide();
		showTweet2.show();
	});
	showTweet2.click(function() {
		$(this).hide();
		think02.show();
	});

	var tweet2 = document.getElementById("tweet2");
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'get_tweets.php', true);
	xhr.send(null);
	xhr.onload = function() {
		if(xhr.status == 200) {
			var tweets = JSON.parse(xhr.responseText);

			tweet2.innerHTML = "&quot;" + tweets.text + "&quot;";

			// tweet2.innerHTML = "<img src=" + tweets.user.profile_image_url_https + ">";

			console.log(tweets);
		}
	}
}
	  


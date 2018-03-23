

$(document).ready(function(){    
    init();
});

// //add JS

function init() {
//smooth scroll onclick
	$('a').click(function(){  
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
    	return false;
  	});

//////////////////////////////////
//                            ///
// last section hide and show ///
//                            ///
/////////////////////////////////

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

////////////////////////////////////////////
//
// hide and show Tweet onClick functions
//
////////////////////////////////////////////

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


////////////////////////////////////////////
//
// ACCESS JSON DATA
//
////////////////////////////////////////////

	var tweet1 = document.getElementById("tweet1"); // burger
	var tweet2 = document.getElementById("tweet2"); // size
	var tweet3 = document.getElementById("tweet3"); // recovery

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'get_tweets.php', true);
	xhr.send(null);
	xhr.onload = function() {
		if(xhr.status == 200) {



			var tweets = JSON.parse(xhr.responseText);

			var allTweets = [tweets[0],tweets[1],tweets[2]];

			var showTweet1 = [tweets[0].full_text, tweets[0].user.name, tweets[0].user.profile_image_url];
			var showTweet2 = [tweets[1].full_text, tweets[1].user.name, tweets[1].user.profile_image_url];
			var showTweet3 = [tweets[2].full_text, tweets[2].user.name, tweets[2].user.profile_image_url];

			var tweetString1 = "";
			var tweetString2 = "";
			var tweetString3 = "";

			// tweetProfile1 = "<img class='tweetProfile' src='" + allTweets[1].user.profile_image_url + "'>";

			tweetProfile1 = "<div id='profile1' class='tweetProfile'></div>";
			tweetUserName1 = "<p class='tweetUserName'>" + allTweets[1].user.name + "&colon;" + "</p>";
			fullTweet1 = "<p class='tweetText tweetTextData'>" + "&quot; " + tweets[1].full_text + ". &quot;" + "</p>";
			tweetString1 = "<div class='tweetGrid'>" + tweetProfile1 + tweetUserName1 + fullTweet1 + "</div>";
			tweet1.innerHTML = tweetString1;
			document.getElementById('profile1').style.backgroundImage = "url(" + tweets[1].user.profile_image_url + ")";
			

			tweetProfile2 = "<div id='profile2' class='tweetProfile'></div>";
			tweetUserName2 = "<p class='tweetUserName'>" + allTweets[0].user.name + "&colon;" + "</p>";
			fullTweet2 = "<p class='tweetText tweetTextData'>" + "&quot; " + tweets[0].full_text + ". &quot;" + "</p>";
			tweetString2 = "<div class='tweetGrid'>" + tweetProfile2 + tweetUserName2 + fullTweet2 + "</div>";
			tweet2.innerHTML = tweetString2;
			document.getElementById('profile2').style.backgroundImage = "url(" + tweets[0].user.profile_image_url + ")";

			tweetProfile3 = "<div id='profile3' class='tweetProfile'></div>";
			tweetUserName3 = "<p class='tweetUserName'>" + allTweets[2].user.name + "&colon;" + "</p>";
			fullTweet3 = "<p class='tweetText tweetTextData'>" + "&quot; " + tweets[2].full_text + ". &quot;" + "</p>";
			tweetString3 = "<div class='tweetGrid'>" + tweetProfile3 + tweetUserName3 + fullTweet3 + "</div>";
			tweet3.innerHTML = tweetString3;
			document.getElementById('profile3').style.backgroundImage = "url(" + tweets[2].user.profile_image_url + ")";

			console.log(tweetString1);
			console.log(tweetString2);
		}


		// var tweet_1_Profile = "<img class='tweetProfile' src='" + showTweet1[2] + "'>";
		// console.log(tweetProfile);
	}





}
	  


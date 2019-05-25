
var currentSaying = '';
  var saying = [' "The Dude abides." The Big Lebowski', ' "Sometimes nothing can be a real cool hand." Cool Hand Luke', ' "Sometimes you eat the bear, sometimes the bear eats you."   The Big Lebowski'];

  
function newQuote() {
  currentSaying = saying
[Math.floor(Math.random() * saying.length)];


 

	$('#message').html(currentSaying);
	$('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text='+currentSaying).attr('target', '_blank');


}


                        
                      
                           
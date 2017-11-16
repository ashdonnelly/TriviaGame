//start game when button is clicked
$("#start-button").on("click", function() {
	game.start();
});

//======================================================================================
// GLOBAL VARIABLES
//======================================================================================

//questions var / objects
var questions = [{
	question: "In 19th century English pubs, it was popular to keep a shaker of <i>this</i> on the counter so patrons could flavor their drinks.",
	answers: ["Ginger", "Cinnamon", "Clove", "Hops"],
	correctAnswer: "Ginger"
}, {
	question: "The ancient Greeks and Romans believed that <i>this</i> was the key to a successful Basil crop.",
	answers: ["Tilling the soil nude beneath a full moon", "Screaming and shouting wild curses while sowing the seeds", "Singing calming songs to the crop while weeding", "All of the above"],
	correctAnswer: "Screaming and shouting wild curses while sowing the seeds"
}, {
	question: "What is the world's largest herb?",
	answers: ["Tobacco", "Spearmint", "Banana", "Tea"],
	correctAnswer: "Banana"
}, {
	question: "Kung Pao chicken made in the US tasted different from the original Chinese dish because it was illegal to import Sichuan Peppercorns until the year:",
	answers: ["1921", "1958", "1981","2005"],
	correctAnswer: "2005"
}, {
	question: "Which of the following is <i>not</i> one of the Five Elements of Chinese Flavor Theory?",
	answers: ["Sour", "Pungent", "Sweet", "Spicy", "Bitter", "Salty"],
	correctAnswer: "Spicy"
}, {
	question: "What is the world's only edible orchid?",
	answers: ["Passionflower", "Anise", "Saffron", "Vanilla"],
	correctAnswer: "Vanilla"
}];

//======================================================================================
// MAIN PROCESSES AND FUNCTIONS
//======================================================================

// game object -- keeps track of amt correct, incorrect, and timer 
var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,
	countdown: function() {
		//decreases counter by 1 every second
		game.counter--;
		//changes html element counter to show decreases in time known by game counter
		$("#counter").html(game.counter);
		if(game.counter <= 0) {
			console.log("Time is up!");
			game.done();
		}
	},
	start: function() {

		//create timer interval for every 1 second (1000 millieconds)
		timer = setInterval(game.countdown, 1000);

		//have timer count down
		$("#subwrapper").prepend("<h2 id='time-remaining'>Time Remaining: <span id='counter'>60</span> seconds</h2>");

		//remove button and start game
		$("#start-button").remove();

		//append each and every question with a name that is equal to the question and a value that s equal to the answer
		//value is stored within the radio buttons themselves
		for (var i = 0; i < questions.length; i++) {
			$("#subwrapper").append("<hr>" + "<h2 id='question-and-answers'>" + questions[i].question + "<h2>");
			for (var j = 0; j < questions[i].answers.length; j++) {
				$("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'> " + questions[i].answers[j] + "<br>")
				}
		}
	},
	done: function(){
		//question 1 get user input; determine if correct/incorrect; add to score
		$.each($("input[name='question-0']:checked"), function(){
				if ($(this).val() == questions[0].correctAnswer){
					game.correct++;
				} else {
					game.incorrect++;
				}
		});
		//question 2 get user input; determine if correct/incorrect; add to score
		$.each($("input[name='question-1']:checked"), function(){
				if($(this).val()==questions[1].correctAnswer){
					game.correct++;
				} else {
					game.incorrect++;
				}
		});
		//question 3 get user input; determine if correct/incorrect; add to score
		$.each($("input[name='question-2']:checked"), function(){
				if($(this).val()==questions[2].correctAnswer){
					game.correct++;
				} else {
					game.incorrect++;
				}
		});
		//question 4 get user input; determine if correct/incorrect; add to score
		$.each($("input[name='question-3']:checked"), function(){
				if($(this).val()==questions[3].correctAnswer){
					game.correct++;
				} else {
					game.incorrect++;
				}
		});
		//question 5 get user input; determine if correct/incorrect; add to score
		$.each($("input[name='question-4']:checked"), function(){
				if($(this).val()==questions[4].correctAnswer){
					game.correct++;
				} else {
					game.incorrect++;
				}
		});
		//question 6 get user input; determine if correct/incorrect; add to score
		$.each($("input[name='question-5']:checked"), function(){
				if($(this).val()==questions[5].correctAnswer){
					game.correct++;
				} else {
					game.incorrect++;
				}
		});

	this.result();
	},

	//print results of game
	result: function(){
		clearInterval(timer);

		//remove time remaining and say time is up
		$("#subwrapper h2").remove();
		$("#subwrapper").html("<h3 id='quiz-over-message'><b>Quiz Over!</b></h3>");

		//calculate and show corrects
		$("#subwrapper").append("<h3>Correct: <b>" + this.correct + "</b>/<b>6</b></h3>");

		//calculate and show incorrects
		$("#subwrapper").append("<h3>Inorrect: <b>" + this.incorrect + "</b>/<b>6</b></h3>");

		//calculate and show unanswereds; subtract incorrects and corrects from amount of questions
		$("#subwrapper").append("<h3>Unaswered: <b>" + (questions.length - (this.incorrect + this.correct)) + "</b>/<b>6</b></h3>");
	}
}
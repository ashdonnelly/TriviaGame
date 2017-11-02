window.onload = function() {
	$("#start-button").on("click", function() {
		$("#start-section").hide();
		$("#game-content").show();
		run();
	});
};

var numberTimer = 90;

var endTimer = 10;

var correctAnswers = 0;

var intervalID;

var isCorrect = $("input[type='radio'][id='correct-answer']:checked");

$("#correct-answers").text(correctAnswers);

// $("#missed-answers").text(missedAnswers);

var answers = $(".answers");

// $("#correct-answer").text(correctAnswer);

// function calculateMissed() {
// 	var missedAnswers = 6 - correctAnswers;
// };

function run() {
    intervalId = setInterval(decrement, 1000);
};

function endGame() {
	$("#game-content").hide();
	$("#end-content").show();
};

function decrement() {
	numberTimer--;
    $("#timer").html(numberTimer);
    if (numberTimer === 0) {
   		stop();
   		endGame();
    	score();
    };
};

function decrementEnd() {
	endTimer--;
	intervalId = setInterval(decrement, 1000);
}

$("#submit-button").on("click", function() {
	stop();
	endGame();
	score();
});


function score() {
	for (var i = 0; i < answers.length; i++) {
		if (isCorrect === true) {
			correctAnswers++;
			console.log("Correct: " + correctAnswers);
		} else {
			var missedAnswers = 6 - correctAnswers;
			$("#missed-answers").text(missedAnswers);
			console.log("Missed: " + missedAnswers);
		};
	};
};

function stop() {
	clearInterval(intervalID);
};
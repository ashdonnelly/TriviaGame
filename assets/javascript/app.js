window.onload = function() {
	$("#start-button").on("click", function() {
		$("#start-section").hide();
		$("#game-content").show();
		run();
	});
};

// $("#submit-button").on("click", function() {
// 	// $("#start-section").hide();
// 	// $("#game-content").hide();
// 	$("#end-content").show();
// });

// $("#submit-button").on("click", stopTimer, function() {
// 	$("#end-content").show();
// 	score;
// });

var numberTimer = 10;

var correctAnswers = 0;

var missedAnswers = 6;

var intervalID;

// var isCorrect = $(".correct-answer").is(":checked");

$("#correct-answers").text(correctAnswers);

$("#missed-answers").text(missedAnswers);

var answers = $(".answers")

// $("#correct-answer").text(correctAnswer);

function calculateMissed() {
	missedAnswers = 6 - correctAnswers
};

function run() {
    intervalId = setInterval(decrement, 1000);
  }

function endGame() {
	$("#game-content").hide();
	$("#end-content").show();
}

function decrement() {
	numberTimer--;
    $("#timer").html(numberTimer);
      if (numberTimer === 0) {
        stop();
        endGame();
        score();
      }
    }

function score() {
	var selected = false;
	for (var i = 0; i < answers.length; i++) {
		if ("#correct-answer".checked) {
			selected = true;
			correctAnswers++;
			console.log("Correct: " + correctAnswers);
		} else {
			calculateMissed();
			console.log("Missed: " + missedAnswers);
		};
	};
};

function stop() {
	clearInterval(intervalID);
};
//start game when button is clicked
$("#start-button").on("click", function() {

	//remove subwrapper to start game
	$("#start-button").remove();

	//append each and every question with a name that is equal to the question and a value that s equal to the answer
	//value is stored within the buttons themselves
	for (var i = 0; i < questions.length; i++) {
		$("#subwrapper").append("<hr>" + "<h2 id='question-and-answers'>" + questions[i].question + "<h2>")
		for (var j = 0; j < questions[i].answers.length; j++) {
			$("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'> " + questions[i].answers[j] + "<br>")
		}
	}
});

//======================================================================================
// GLOBAL VARIABLES
//======================================================================================

//questions var / objects
var questions = [{
	question: "In 19th century English pubs, it was popular to keep a shaker of this on the counter so patrons could flavor their drinks.",
	answers: ["Ginger", "Cinnamon", "Clove", "Hops"],
	correctAnswer: "Ginger"
}, {
	question: "The ancient Greeks and Romans believed that this was the key to a successful Basil crop.",
	answers: ["Tilling the soil nude beneath a full moon", "Screaming and shouting wild curses while sowing the seeds", "Singing calming songs to the crop while weeding", "All of the above"],
	correctAnswer: "Screaming and shouting wild curses while sowing the seeds"
}, {
	question: "What is the world's largest herb?",
	answers: ["Tobacco", "Spearmint", "Banana", "Tea"],
	correctAnswer: "Banana"
}, {
	question: "Kung Pao chicken made in the US tasted different from the original Chinese dish because it was illegal to import Sichuan Peppercorns until the year ____.",
	answers: ["1958", "1981", "2005", "2017"],
	correctAnswer: "2005"
}, {
	question: "Chinese Five Spice is an traditional blend named for the Five:",
	answers: ["Spices in the Blend", "Flavors in the Blend", "Chinese Medicinal Humours", "Great Eastern Dynasties"],
	correctAnswer: "Flavors in the Blend"
}, {
	question: "What is the world's only edible orchid?",
	answers: ["Passionflower", "Anise", "Saffron", "Vanilla"],
	correctAnswer: "Vanilla"
}];

//======================================================================================
// FUCTIONS
//======================================================================================


//======================================================================================
// MAIN PROCESSES (function calls aka game)
//======================================================================================



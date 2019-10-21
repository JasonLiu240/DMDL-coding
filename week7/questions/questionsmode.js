// <div id="question">
// 			<h2>Question 1 of 2</h2>
// 			<p>What tag should I use if I want to add an external javascript file</p>
// 			<ol type="A">
// 				<li><label><input type="radio" name="question1" value="A">script</label></li>
// 				<li><label><input type="radio" name="question1" value="B">javascript</label></li>
// 				<li><label><input type="radio" name="question1" value="C">include</label></li>
// 				<li><label><input type="radio" name="question1" value="D">style</label></li>
// 			</ol>
// 		</div>


let currentQuestion = 1;

const currentQuestionHeader = document.querySelector("#currentQuestionHeader");
//Question header
const QuestionHeader = document.createTextNode(`Question ${currentQuestion} of ${activeQuestions.length}`);
currentQuestionHeader.appendChild(QuestionHeader);


//Question text
let currentQuestionData = activeQuestions[currentQuestion-1];
console.log(currentQuestionData);
const QuestionText = document.querySelector("#QuestionText");
const QuestionTextContext = document.createTextNode(currentQuestionData.question);
QuestionText.appendChild(QuestionTextContext);

//Set answer list
const ListItem = document.querySelector("#ListItem");

for(let option in currentQuestionData.response){
	
	const options = document.createElement("li");
	const input = document.createElement("input");
	
	const label = document.createElement("label");
	input.setAttribute("type", "radio");
	input.setAttribute("name", "option");
	
	const words = document.createTextNode(currentQuestionData.response[option]);
	
	label.appendChild(input);
	label.appendChild(words);
	options.appendChild(label);
	ListItem.appendChild(options);
}

// progress dot
const dot = document.querySelector("#dot");
for(let dotnumber in activeQuestions){
	const ProgressDot = document.createElement("div");
	ProgressDot.className = "correct";
	dot.appendChild(ProgressDot);
}




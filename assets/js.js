//declaring variables. Put variables in arrays

var q = ["What is 5 x 5?<br />", "What is 5 / 5?<br />", "What is 8 x 3?<br />", "What is 9 / 3?<br />", "What is 4 x 2?<br />", "What is 1 / 1?<br />", "What is 6 - 6?<br />", "What is 6 x 6?<br />", "What is 7 x 2?<br />", "What is 45 / 9?<br />"];
var a1 = ["<button class=answerButtons onclick=q1c()>Yo, it's 25, yo! YO three words: TWEN.TEE.FIVE!!!!</button>",
    "<button class=answerButtons onclick=q2c()>1 because it's lonely but it's great being number 1</button>",
    "<button class=answerButtons onclick=q3c()>24 because TWEN.TEE.FOUR!</button>",
    "<button class=answerButtons onclick=q4i()>armpit hair</button>",
    "<button class=answerButtons onclick=q5i()>your mom</button>",
    "<button class=answerButtons onclick=q6i()>Applesauce on gravy</button>",
    "<button class=answerButtons onclick=q7i()>38 because I can't math</button>",
    "<button class=answerButtons onclick=q8i()>66 because now this is multiplication using common core</button>",
    "<button class=answerButtons onclick=q9c()>Pizza but I really mean 14</button>",
    "<button class=answerButtons onclick=q10i()>10 because that's how I see myself in a swimsuit competition </button>"];

var a2 = ["<button class=answerButtons onclick=q1i()>20 because it feels nice.</button>",
    "<button class=answerButtons onclick=q2i()>Purple cow because I like purple cows</button>",
    "<button class=answerButtons onclick=q3i()>cheeese</button>",
    "<button class=answerButtons onclick=q4c()>3 is an awesome number if you like being the third wheel in a relationship</button>",
    "<button class=answerButtons onclick=q5c()>8 because it is such a curvy number</button>",
    "<button class=answerButtons onclick=q6c()>1 again... to remind you that you are always alone</button>",
    "<button class=answerButtons onclick=q7i()>66 because I can't math but this is common core math</button>",
    "<button class=answerButtons onclick=q8i()>6 because now this is division using common core</button>",
    "<button class=answerButtons onclick=q9i()>15 but I really mean pizza</button>",
    "<button class=answerButtons onclick=q10i()>2 because 3 is a crowd</button>"];

var a3 = ["<button class=answerButtons onclick=q1i()>45 is a nice guess of a number</button>",
    "<button class=answerButtons onclick=q2i()>4 for four because it's forty four</button>",
    "<button class=answerButtons onclick=q3i()>22 with cheese</button>",
    "<button class=answerButtons onclick=q4i()>beard hair</button>",
    "<button class=answerButtons onclick=q5i()>your mom's mom</button>",
    "<button class=answerButtons onclick=q6i()>You meant 1, right? Don't pick this... it's wrong.</button>",
    "<button class=answerButtons onclick=q7c()>0 because although this doesn't belong here because we're doing multiplication/division</button>",
    "<button class=answerButtons onclick=q8c()>36 because your mom</button>",
    "<button class=answerButtons onclick=q9i()>Pizza with pineapple on it because 4</button>",
    "<button class=answerButtons onclick=q10i()>I don't know. I'm only 3 years old.</button>"];

var a4 = ["<button class=answerButtons onclick=q1i()>Green Eggs and Ham to feed your brain</button>",
    "<button class=answerButtons onclick=q2i()>21 because now you're legal to drin... err, older than the voting age</button>",
    "<button class=answerButtons onclick=q3i()>Twenty-cheese</button>",
    "<button class=answerButtons onclick=q4i()>hair on your palms because... use your imagination</button>",
    "<button class=answerButtons onclick=q5i()>your mom's mom's mom</button>",
    "<button class=answerButtons onclick=q6i()>I think you really meant 1 because this is wrong 2, err to, err too.</button>",
    "<button class=answerButtons onclick=q7i()>Can I call a friend who knows more common core math than me?</button>",
    "<button class=answerButtons onclick=q8i()>88 because it's curvier than just one 8</button>",
    "<button class=answerButtons onclick=q9i()>Pizza that fell on the floor but is still good because of the 5 second rule</button>",
    "<button class=answerButtons onclick=q10c()>5 as in high five dude, you're done!</button>"];

var c = ["You got it dude!", "Yaasss Queeen!!!", "You're killing it!", "You sure you're not cheating?!", "You the man now dawg!!!", "OMG, you're so good! I'm gonna have your baby!", "This dude abides!!!", "Jon Snow may know nothing, but you ain't Jon Snow!", "What?!?! Another right answer?!?!", "Excelsior!!!"];
var i = ["WRONG minion!", "Try again!", "Hmmmkay, that's not quite right.", "At least you tried... but still got it wrong!", "Do you need to cry to mommy? You got it wrong.", "Thank goodness you're cute... because you sure aint right.", "How hard can this be? It's just math.", "I hope you didn't hurt your head thinking of the wrong answer.", "If aliens come looking for intelligent life, you'll be safe.", "Your village called. They're looking for their idiot."];

var n = 0;
n++;
var s = 0;
s++;
var t = 15;

//setting functions to hide initial div that starts the game when clicked and functions that track score and determine if a user's answers are correct/incorrect 

function startQuiz() {
    exitDiv.innerHTML = "";
    startHere.innerHTML = "";
    quizQuestion.innerHTML = q[0];
    answer1.innerHTML = a1[0];
    answer2.innerHTML = a2[0];
    answer3.innerHTML = a3[0];
    answer4.innerHTML = a4[0];
    questionCount.innerHTML = n++;
}

function q1c() {
    userAnswer1.innerHTML = "<div id=correctAnswer>" + c[0] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new002()>Next</button>";
    userScore.innerHTML = s++;
}



function q1i() {
    userAnswer1.innerHTML = "<div id=wrongAnswer>" + i[0] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new002()>Next</button>";
}

function new002() {
    quizQuestion.innerHTML = q[1];
    answer1.innerHTML = a1[1];
    answer2.innerHTML = a2[1];
    answer3.innerHTML = a3[1];
    answer4.innerHTML = a4[1];
    nextQuestion.innerHTML = "";
    userAnswer1.innerHTML = "";
    questionCount.innerHTML = n++;
}

function q2c() {
    userAnswer1.innerHTML = "<div id=correctAnswer>" + c[1] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new003()>Next</button>";
    userScore.innerHTML = s++;
}

function q2i() {
    userAnswer1.innerHTML = "<div id=wrongAnswer>" + i[1] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new003()>Next</button>";
}

function new003() {
    quizQuestion.innerHTML = q[2];
    answer1.innerHTML = a1[2];
    answer2.innerHTML = a2[2];
    answer3.innerHTML = a3[2];
    answer4.innerHTML = a4[2];
    nextQuestion.innerHTML = "";
    userAnswer1.innerHTML = "";
    questionCount.innerHTML = n++;
}

function q3c() {
    userAnswer1.innerHTML = "<div id=correctAnswer>" + c[2] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new004()>Next</button>";
    userScore.innerHTML = s++;
}

function q3i() {
    userAnswer1.innerHTML = "<div id=wrongAnswer>" + i[2] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new004()>Next</button>";
}

function new004() {
    quizQuestion.innerHTML = q[3];
    answer1.innerHTML = a1[3];
    answer2.innerHTML = a2[3];
    answer3.innerHTML = a3[3];
    answer4.innerHTML = a4[3];
    nextQuestion.innerHTML = "";
    userAnswer1.innerHTML = "";
    questionCount.innerHTML = n++;
}

function q4c() {
    userAnswer1.innerHTML = "<div id=correctAnswer>" + c[3] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new005()>Next</button>";
    userScore.innerHTML = s++;
}

function q4i() {
    userAnswer1.innerHTML = "<div id=wrongAnswer>" + i[3] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new005()>Next</button>";
}

function new005() {
    quizQuestion.innerHTML = q[4];
    answer1.innerHTML = a1[4];
    answer2.innerHTML = a2[4];
    answer3.innerHTML = a3[4];
    answer4.innerHTML = a4[4];
    nextQuestion.innerHTML = "";
    userAnswer1.innerHTML = "";
    questionCount.innerHTML = n++;
}

function q5c() {
    userAnswer1.innerHTML = "<div id=correctAnswer>" + c[4] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new006()>Next</button>";
    userScore.innerHTML = s++;
}

function q5i() {
    userAnswer1.innerHTML = "<div id=wrongAnswer>" + i[4] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new006()>Next</button>";
}

function new006() {
    quizQuestion.innerHTML = q[5];
    answer1.innerHTML = a1[5];
    answer2.innerHTML = a2[5];
    answer3.innerHTML = a3[5];
    answer4.innerHTML = a4[5];
    nextQuestion.innerHTML = "";
    userAnswer1.innerHTML = "";
    questionCount.innerHTML = n++;
}

function q6c() {
    userAnswer1.innerHTML = "<div id=correctAnswer>" + c[5] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new007()>Next</button>";
    userScore.innerHTML = s++;
}

function q6i() {
    userAnswer1.innerHTML = "<div id=wrongAnswer>" + i[5] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new007()>Next</button>";
}

function new007() {
    quizQuestion.innerHTML = q[6];
    answer1.innerHTML = a1[6];
    answer2.innerHTML = a2[6];
    answer3.innerHTML = a3[6];
    answer4.innerHTML = a4[6];
    nextQuestion.innerHTML = "";
    userAnswer1.innerHTML = "";
    questionCount.innerHTML = n++;
}

function q7c() {
    userAnswer1.innerHTML = "<div id=correctAnswer>" + c[6] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new008()>Next</button>";
    userScore.innerHTML = s++;
}

function q7i() {
    userAnswer1.innerHTML = "<div id=wrongAnswer>" + i[6] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new008()>Next</button>";
}

function new008() {
    quizQuestion.innerHTML = q[7];
    answer1.innerHTML = a1[7];
    answer2.innerHTML = a2[7];
    answer3.innerHTML = a3[7];
    answer4.innerHTML = a4[7];
    nextQuestion.innerHTML = "";
    userAnswer1.innerHTML = "";
    questionCount.innerHTML = n++;
}

function q8c() {
    userAnswer1.innerHTML = "<div id=correctAnswer>" + c[7] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new009()>Next</button>";
    userScore.innerHTML = s++;
}

function q8i() {
    userAnswer1.innerHTML = "<div id=wrongAnswer>" + i[7] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new009()>Next</button>";
}

function new009() {
    quizQuestion.innerHTML = q[8];
    answer1.innerHTML = a1[8];
    answer2.innerHTML = a2[8];
    answer3.innerHTML = a3[8];
    answer4.innerHTML = a4[8];
    nextQuestion.innerHTML = "";
    userAnswer1.innerHTML = "";
    questionCount.innerHTML = n++;
}

function q9c() {
    userAnswer1.innerHTML = "<div id=correctAnswer>" + c[8] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new010()>Next</button>";
    userScore.innerHTML = s++;
}

function q9i() {
    userAnswer1.innerHTML = "<div id=wrongAnswer>" + i[8] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=new010()>Next</button>";
}

function new010() {
    quizQuestion.innerHTML = q[9];
    answer1.innerHTML = a1[9];
    answer2.innerHTML = a2[9];
    answer3.innerHTML = a3[9];
    answer4.innerHTML = a4[9];
    nextQuestion.innerHTML = "";
    userAnswer1.innerHTML = "";
    questionCount.innerHTML = n++;
}

function q10c() {
    userAnswer1.innerHTML = "<div id=correctAnswer>" + c[9] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=end001()>End of Quiz</button>";
    userScore.innerHTML = s++;
}

function q10i() {
    userAnswer1.innerHTML = "<div id=wrongAnswer>" + i[9] + "</div>";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<button class=tryAgainButton onclick=end001()>End of Quiz</button>";
}

function end001() {
    startHere.innerHTML = "End of Quiz.";
    quizQuestion.innerHTML = "";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    nextQuestion.innerHTML = "<div id=quizHeadings>" + "<button class=tryAgainButton onclick=repeat001()>Try again ice cream licker!!</button>" + "</div>";
    userAnswer1.innerHTML = "";
}

//timer function starts here
function gameTime() {
    t = t -1;
    if (t < 15) {
        gameTimer.innerHTML = t;
    }
    if (t <1){
        window.clearInterval(update);
}
    }

update = setInterval("gameTime()", 1000); //sets the interval for 1000 msecs

//function to reset the game, in case user wants more insults

function repeat001() {
    location.reload();
}
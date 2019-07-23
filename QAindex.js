let questionNumber = 0;
let scoreA = 0;
let totalscore =  0;

//generate question html
//tmk  newly added restart button
function generateQuestion () {
    console.log(55555);
  if (questionNumber < STORE.length) {
    return `<div class="question-${questionNumber}">
    <h2>${STORE[questionNumber].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    <span>${STORE[questionNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    <span>${STORE[questionNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    <span>${STORE[questionNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    <span>${STORE[questionNumber].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>`;
} else {
    renderResults();
    restartQuiz();
    $('.questionNumber').text(10)
  }
}

//increment question number
function changeQuestionNumber () {
    questionNumber ++;
  $('.questionNumber').text(questionNumber+1);
}

//increment score
function changeScoreA () {
  scoreA ++;
}

// tmk added funtion but not complete
/*function changetotalScore () {
    totalscore = scoreA + scoreB;
    return `"you score" ${scoreA} + "on the first part and " ${scoreB} + "on the second part which gives you a total score of" ${totalscore}`;
  }
  */

  //start quiz
//on startQuizButton click hide start div
//unhide quiz form div
function startQuiz () {
    console.log(333, "index after click is called")
    $('.quizStart').on('click', '.startButton', function (event) {
    $('.newstartQuiz').remove();
    $('.quizStart').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.questionNumber').text(1);
});
}

// render question in DOM
function renderQuestion () {
// tmk added console for testing
    console.log(55555, 'setting up after questions');
  $('.questionAnswerForm').html(generateQuestion());
}

//user selects answer on submit run user feedback
function userSelectAnswer () {
    console.log("aft", 22, 'after every called')
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      selected.parent().addClass('correct');
      ifAnswerIsCorrect();
    } else {
      selected.parent().addClass('wrong');
      ifAnswerIsWrong();
    }
  });
}
// tmk will come back to idea of restart quiz button inside question
/*function retryQuiz () {
    console.log("retry was fired")

    $('form').on('.restartButtonother', function (event) {
        event.preventDefault();
        var doc;
        var result = confirm("Press a button!"); 
            if (result == true) { 
                scoreA = 0;
                location.reload();
            } else { 
                doc = "Cancel was pressed."; 
                console.log(doc);
            }    
      });
  }
*/

function ifAnswerIsCorrect () {
  userAnswerFeedbackCorrect();
  updateScoreA();
}

function ifAnswerIsWrong () {
  userAnswerFeedbackWrong();
}

//user feedback for correct answer
function userAnswerFeedbackCorrect () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it right!</b></p><button type=button class="nextButton">Next</button></div>`);
}

//user feedback for wrong answer
function userAnswerFeedbackWrong () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  let icon  = 'https://i.imgur.com/3nWGV9zb.jpg';
  $('.questionAnswerForm').html(`<div class="wrongFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//update score text
function updateScoreA () {
  changeScoreA();
  $('.scoreA').text(scoreA);
}

//when quiz is over this is the html for the page
function renderResults () {
  if (scoreA >= 8) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You're on fire!</h3><img src="src="//i.imgur.com/EfpoXQ4.jpg"" alt="campfire animated icon"/><p>You got ${scoreA} / 10</p><p>You're ready to plan your backpacking trip!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else if (scoreA < 8 && scoreA >= 5) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Almost there!</h3><img src="https://i.imgur.com/G3IuGiC.jpg" alt="raccoona animated icon"/><p>You got ${scoreA} / 10</p><p>Bone up on your backpacking knowledge a little more and you'll be ready to go!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You might want to stick with car camping</h3><img src="https://i.imgur.com/ccVbmfC.png" alt="car animcated icon"/><i class='far fa-frown' style='font-size:36px'></i><p>You got ${scoreA} / 10</p><p>With more camping and outdoor experience you'll be able to pass this quiz in no time</p><button class="restartButton">Restart Quiz</button></div>`);
  }
}

//what happens when the user clicks next
function renderNextQuestion () {
    console.log('after calling looking to call more')
  $('main').on('click', '.nextButton', function (event) {
    changeQuestionNumber();
    renderQuestion();
    userSelectAnswer();
  });
}

//restart quiz function - reloads page to start quiz over
function restartQuiz () {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}


function callingyou () {
    console.log("index starting 122");
    var buttonclicked;    
    $(".startButton").click(function(){
    if( buttonclicked != true ) {
        buttonclicked= true;
        createQuiz();
        console.log('still in 122 ');
    }else{

        console.log("next time but check 122");
    }
    })
    }

//run quiz functions
function createQuiz () {      
    console.log(22, "index case  everthing being caled")
  startQuiz();
  renderQuestion();
  userSelectAnswer();
  renderNextQuestion();

}
//$(createQuiz)
$(callingyou);
//callingyou();




/////////////////////////////       ////////////////////////////////       /////////////////////////////       ////////////////////////////////
//////////////////////////////          ///////////////////////////////           //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////       ////////////////////////////////       /////////////////////////////       ////////////////////////////////
/////////////////////////////       ////////////////////////////////       /////////////////////////////       ////////////////////////////////




/* 


// tmk added my to both
let myquestNumber = 0;
let myScore = 0;


function allmygQuestion () {
    console.log(2);
  if (myquestNumber < otherSTORE.length) {
    return `<div class="question-${myquestNumber}">
    <h2>${otherSTORE[myquestNumber].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${otherSTORE[myquestNumber].answers[0]}" name="answer" required>
    <span>${otherSTORE[myquestNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${otherSTORE[myquestNumber].answers[1]}" name="answer" required>
    <span>${otherSTORE[myquestNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${otherSTORE[myquestNumber].answers[2]}" name="answer" required>
    <span>${otherSTORE[myquestNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${otherSTORE[myquestNumber].answers[3]}" name="answer" required>
    <span>${otherSTORE[myquestNumber].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>`;

} else {
    renderResults();
    myrestartQuz();

    $('.myquestNumber').text(10)
  }
}

//increment question number
function changemyquestNumber () {
  //if (myquestNumber < otherSTORE.length) {
    myquestNumber ++;
  //}
  $('.myquestNumber').text(myquestNumber+1);
}

//increment myscore
function changeScore () {
    myscore ++;
}

//start quiz
//on startQuizButton click hide start div
//unhide quiz form div
function newstartQuiz () {
    console.log(3);
    $('.newstartQuiz').on('click', '.otherstartButton', function (event) {
    $('.newstartQuiz').remove();
    $('.quizStart').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.myquestNumber').text(1);

});
}

// render question in DOM
function myrenderQuestion () {
    console.log(5);
  $('.questionAnswerForm').html(allmygQuestion());
}

//user selects answer on submit run user feedback
function newuserSelectAnswer () {
    console.log(6);
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${otherSTORE[myquestNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      selected.parent().addClass('correct');
      ifAnswerIsCorrect();
    } else {
      selected.parent().addClass('wrong');
      ifAnswerIsWrong();
    }
  });
}

function ifAnswerIsCorrect () {
  userAnswerFeedbackCorrect();
  updateScore();
}

function ifAnswerIsWrong () {
  userAnswerFeedbackWrong();
}

//user feedback for correct answer
function userAnswerFeedbackCorrect () {
  let correctAnswer = `${otherSTORE[myquestNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${otherSTORE[myquestNumber].icon}" alt="${otherSTORE[myquestNumber].alt}"/></div><p><b>You got it right!</b></p><button type=button class="nextButton">Next</button></div>`);
}

//user feedback for wrong answer
function userAnswerFeedbackWrong () {
  let correctAnswer = `${otherSTORE[myquestNumber].correctAnswer}`;
  // let iconImage = `${otherSTORE[myquestNumber].icon}`;
  $('.questionAnswerForm').html(`<div class="wrongFeedback"><div class="icon"><img src="${otherSTORE[myquestNumber].icon}" alt="${otherSTORE[myquestNumber].alt}"/></div><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//update score text
function updateScore () {
  changeScore();
  $('.score').text(myscore);
}

//when quiz is over this is the html for the page
function renderResults () {
  if (myscore >= 8) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You're on fire!</h3><img src="https://i.imgur.com/OPODnDn.gif" alt="campfire animated icon"/><p>You got ${score} / 10</p><p>You're ready to plan your backpacking trip!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else if (myscore < 8 && myscore >= 5) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Almost there!</h3><img src="https://i.imgur.com/41Jnnxk.gif" alt="raccoona animated icon"/><p>You got ${score} / 10</p><p>Bone up on your backpacking knowledge a little more and you'll be ready to go!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You might want to stick with car camping</h3><img src="https://i.imgur.com/iGqoVcM.gif" alt="car animcated icon"/><p>You got ${score} / 10</p><p>With more camping and outdoor experience you'll be able to pass this quiz in no time</p><button class="restartButton">Restart Quiz</button></div>`);
  }
}

//what happens when the user clicks next
function newrenderNextQuestion () {
    console.log(7)
  $('main').on('click', '.nextButton', function (event) {
    changemyquestNumber();
    myrenderQuestion();
    newuserSelectAnswer();
  });
}

//restart quiz function - reloads page to start quiz over
function myrestartQuz () {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}


function callyouback(){
    var buttoicked;
    $(".other2tartButton").click(function(){
    if( buttoicked != true ) {
        buttoicked= true;
        NextmadeQuiz();
        console.log(NextlearningQuiz);
    }else{
        console.log(" man something else again");
    }
    })
    }
    

//run quiz functions
function NextlearningQuiz () {
  level2quiz();
    //newstartQuiz();
  renderThetest();
//  myrenderQuestion();
pickanAnswer();  
//  newuserSelectAnswer();
moveTonext();
  newrenderNextQuestion();
//7
  //didyouPass();
}

$(callyouback)
//$(NextmadeQuiz);


*/
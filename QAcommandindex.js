// tmk added my to both
let myquestNumber = 0;
let myScore = 0;



function newgenerateQuestion () {
    console.log(222);
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
function changemyScore () {
    myscore ++;
}

//start quiz
//on startQuizButton click hide start div
//unhide quiz form div
function newstartQuiz () {
    console.log("3 command");
    $('.newstartQuiz').on('click', '.otherstartButton', function (event) {
    $('.newstartQuiz').remove();
    $('.quizStart').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.myquestNumber').text(1);
});
}

// render question in DOM
function myrenderQuestion () {
    console.log("5sub");
  $('.questionAnswerForm').html(newgenerateQuestion());
}

//user selects answer on submit run user feedback
function newuserSelectAnswer () {
    console.log(6, "or22", 'newuserSelectAnswer');
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
  updatemyScore();
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
function updatemyScore () {
  changemyScore();
  $('.myscore').text(myscore);
}

//when quiz is over this is the html for the page
function renderResults () {
  if (myscore >= 8) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You're on fire!</h3><img src="https://i.imgur.com/OPODnDn.gif" alt="campfire animated icon"/><p>You got ${myScore} / 10</p><p>You're ready to plan your backpacking trip!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else if (myscore < 8 && myscore >= 5) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Almost there!</h3><img src="https://i.imgur.com/41Jnnxk.gif" alt="raccoona animated icon"/><p>You got ${myScore} / 10</p><p>Bone up on your backpacking knowledge a little more and you'll be ready to go!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You might want to stick with car camping</h3><img src="https://i.imgur.com/iGqoVcM.gif" alt="car animcated icon"/><p>You got ${myScore} / 10</p><p>With more camping and outdoor experience you'll be able to pass this quiz in no time</p><button class="restartButton">Restart Quiz</button></div>`);
  }
}

//what happens when the user clicks next
function newrenderNextQuestion () {
    console.log(7,"function newrenderNextQuestion", 'after calling looking to call more')
  $('main').on('click', '.nextButton', function (event) {
    changemyquestNumber();
    myrenderQuestion();
    newuserSelectAnswer();
  });
}

//restart quiz function - reloads page to start quiz over
function myrestartQuz () {
    
    console.log(7,"function myrestartQuz")
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}


function callingyouNow(){
    console.log("starting 111");
    var buttoicked;
    $(".otherstartButton").click(function(){
    if( buttoicked != true ) {
        buttoicked= true;
        NextmadeQuiz();
        console.log(NextmadeQuiz);
    }else{
        console.log(" man something else again");
    }
    })
    }
    

  // tmk newly added, idea is to reply if both test was high scored or not at this point
  /*function  didyouPasseverything(){
    if (scoreA >= 8 && myscore >= 8) {
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You're on fire!</h3><img src="https://i.imgur.com/OPODnDn.gif" alt="campfire animated icon"/><p>You got ${myscore} / 10</p><p>You're ready to plan your backpacking trip!</p><button class="restartButton">Restart Quiz</button></div>`);
      } else if (myscore <1) {
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Almost there!</h3><img src="https://i.imgur.com/41Jnnxk.gif" alt="raccoona animated icon"/><p>You got ${myscore} / 10</p><p>Bone up on your backpacking knowledge a little more and you'll be ready to go!</p><button class="restartButton">Restart Quiz</button></div>`);
      } else {
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You might want to stick with car camping</h3><img src="https://i.imgur.com/iGqoVcM.gif" alt="car animcated icon"/><p>You got ${myscore} / 10</p><p>With more camping and outdoor experience you'll be able to pass this quiz in no time</p><button class="restartButton">Restart Quiz</button></div>`);
      }
  };
  */


//run quiz functions
function NextmadeQuiz () {
  newstartQuiz();
  //3
  myrenderQuestion();
  //5
  newuserSelectAnswer();
//6
  newrenderNextQuestion();
//7
  //didyouPasseverything();
}

$(callingyouNow)
//$(NextmadeQuiz);

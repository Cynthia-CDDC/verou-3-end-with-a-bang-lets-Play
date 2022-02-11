import 'animate.css';
export const score = [];
const holder = document.getElementById("holder")
const feedbackHolder = document.getElementById("resultHolder");
import { getSum } from "./score.js"
import {success} from "./feedback.js"
import {fail} from "./feedback.js"

let answerInput = document.createElement("input")
answerInput.id = "answerInput"
answerInput.placeholder = "Put Your Answer Here ..."
let inputHolder = document.createElement("P")
inputHolder.appendChild(answerInput)

const feedbackDiv = document.createElement("P")
feedbackDiv.id = "feedbackDiv"

let button = document.createElement("button")
button.innerHTML = "Submit"
button.id = "submitButton"
inputHolder.appendChild(button)

let questionLine = document.createElement("P")
questionLine.id = "questionLine"
holder.appendChild(inputHolder)
holder.appendChild(questionLine)
feedbackHolder.appendChild(feedbackDiv)

let i = 0
let questions = {}

// put the question in box
function attachToElement() {
    questionLine.innerHTML = questions[i].question
}


// fetch data using API
export let url ;
export let fetchQuestions = async (url) => {
   try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(res.status);
        }
        const data = await res.json();
        console.log(data);
        questions = data.results
        attachToElement()
    } catch (error) {
        console.log(error);
    }
}

// Choice of Question
document.addEventListener("DOMContentLoaded", function(e) {

    // Put the button into a variable
    var e = document.getElementById("myForm");
    
    // Wait for user to click the button
    e.addEventListener( "change", function() {
    
      // Put the selected value into a variable
      var myChoice = this.choice.value;
      
      // The "Switch" statement.
      switch ( myChoice ) {
      
      case "film":
        url = "https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple"
        fetchQuestions(url)
        break;
  
      case "music":
        url = "https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple"
        fetchQuestions(url)
  
      case "video":
        url = "https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple"
        fetchQuestions(url)
        break;

      case "board":
            url = "https://opentdb.com/api.php?amount=5&category=16&difficulty=easy&type=multiple"
            fetchQuestions(url)
            break;
    case "general":
        url = "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
        fetchQuestions(url)
        break;
        }
    }, false);
  });

// feedback success or fail message
function responseMsg(is_success, correct_answer) {
    
    if (is_success) {
        const successMsg = document.createElement("P");
        successMsg.className = "animate__animated animate__slideInRight"
        successMsg.id = "successMsg"
        successMsg.id = "successDiv"
        feedbackDiv.appendChild(successMsg)
        successMsg.innerHTML = `<img id="img" src="https://img.icons8.com/emoji/48/000000/nikita-clapping-hands-emoji.png"/><span>Good Job!</span>`
    } else {
        const failMsg = document.createElement("P");
        failMsg.className = "animate__animated animate__slideInRight"
        failMsg.id = "failMsg"
        failMsg.id = "failDiv"
        feedbackDiv.appendChild(failMsg)
       failMsg.innerHTML = `<img id="img" src="https://img.icons8.com/emoji/48/000000/thinking-face.png"/><span>NOT CORRECT!</span> The correct answer is <span>${correct_answer}.</span>`
    }
}
// check the Answer
function checkAndNext() {
    const userInputValue = answerInput.value
    const userInputValueLowerCase = userInputValue.toLowerCase()
    console.log(userInputValueLowerCase)
    const correct_answer = questions[i].correct_answer.toLowerCase()
    console.log(correct_answer)
    if( userInputValueLowerCase == correct_answer){
        score.push(5)
        getSum()
        success()
        responseMsg(true, correct_answer)
    }else{
        score.push(0)
        getSum()
        fail()
        responseMsg(false, correct_answer)   
    }
    questionLine.innerHTML = ''
    answerInput.value = ''
}
button.addEventListener('click', function() {
    checkAndNext()
    i++
    attachToElement()
})

// restart the game
const restart = document.getElementById("restart")
function reloadPage(){
    window.location = document.URL
}
restart.addEventListener("click", reloadPage)

window.addEventListener("load", event => {
    document.getElementById("restart").onclick = function() {
        location.assign(location.href);        // or, use `location.assign(location)`
    }
});



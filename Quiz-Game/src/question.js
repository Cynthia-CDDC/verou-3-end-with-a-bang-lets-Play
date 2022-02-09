export const score = []
const holder = document.getElementById("holder")
const feedbackHolder = document.getElementById("resultHolder")
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
const fetchQuestions = async () => {
   try {
        const res = await fetch("https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple");
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
// feedback success or fail message
function responseMsg(is_success, correct_answer) {
    
    if (is_success) {
        const successMsg = document.createElement("P");
        successMsg.id = "successMsg"
        successMsg.id = "successDiv"
        feedbackDiv.appendChild(successMsg)
        successMsg.innerHTML = "CORRECT"
    } else {
        const failMsg = document.createElement("P");
        failMsg.id = "failMsg"
        failMsg.id = "failDiv"
        feedbackDiv.appendChild(failMsg)
       failMsg.innerHTML = `NOT CORRECT! The correct answer is ${correct_answer}`
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
fetchQuestions();
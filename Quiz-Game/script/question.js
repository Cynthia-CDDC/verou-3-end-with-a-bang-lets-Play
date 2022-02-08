export const score = []
const holder = document.getElementById("holder")
import { getSum } from "./score.js"
import {success} from "./success.js"
import {fail} from "./fail.js"

let answerInput = document.createElement("input")
let inputHolder = document.createElement("P")
inputHolder.appendChild(answerInput)

let button = document.createElement("button")
button.innerHTML = "Submit"
inputHolder.appendChild(button)

let questionLine = document.createElement("P")
holder.appendChild(inputHolder)
holder.appendChild(questionLine)

const successMsg = document.createElement("P");
successMsg.id = "successDiv"
holder.appendChild(successMsg)

const failMsg = document.createElement("P");
failMsg.id = "failDiv"
holder.appendChild(failMsg)


let i = 0
let questions = {}


function attachToElement() {
    questionLine.innerHTML = questions[i].question
}

const fetchQuestions = async () => {
   try {
        const res = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
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

function responseMsg(is_success, correct_answer) {
    if (is_success) {
        successMsg.innerHTML = "CORRECT"
    } else {
       failMsg.innerHTML = `NOT CORRECT! The correct answer is ${correct_answer}`
    }
    
}
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
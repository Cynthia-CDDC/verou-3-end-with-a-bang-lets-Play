export const score = []
const holder = document.getElementById("holder")
import { getSum } from "./score.js"
import {success} from "./success.js"
import {fail} from "./fail.js"


const fetchUsers = async () => {
   try {
        const res = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
        if (!res.ok) {
            throw new Error(res.status);
        }
        const data = await res.json();
        console.log(data);

        // loop the questions
        const fullData = data.results
        
        for(let i = 0; i < fullData.length; i++){
            
            console.log(fullData[i])
           // display Question
            const questionP = document.createElement("P")
            const inputHolder = document.createElement("P")
            questionP.innerHTML = fullData[i].question
            holder.appendChild(questionP)

           // create input
            const userInput = document.createElement("input")
            userInput.type = "text"
            userInput.value = " "
            inputHolder.appendChild(userInput)

            // create button
            const button = document.createElement("button")
            button.innerHTML = "Submit"
            inputHolder.appendChild(button)
            holder.appendChild(inputHolder)

            // Check answer function
           button.addEventListener('click', function checkAnswer(){
            const userInputValue = userInput.value
            const userInputValueLowerCase = userInputValue.toLowerCase()
            console.log(userInputValueLowerCase)
            const correct_answer = fullData[i].correct_answer.toLowerCase()
            console.log(correct_answer)
                if( userInputValueLowerCase == " "+ correct_answer){
                    inputHolder.style.display = "none"
                    score.push(5)
                    getSum()
                    success()
                    const successDiv = document.createElement("P");
                    successDiv.id = "successDiv"
                    successDiv.innerHTML = "CORRECT"
                    questionP.appendChild(successDiv)
                }else{
                    inputHolder.style.display = "none"
                    score.push(0)
                    getSum()
                    fail()
                    const failDiv = document.createElement("P");
                    failDiv.innerHTML = `NOT CORRECT! The correct answer is ${correct_answer}`
                    failDiv.id = "failDiv"
                    questionP.appendChild(failDiv)
                }
           })
           }
    } catch (error) {
        console.log(error);
    }
}
fetchUsers();

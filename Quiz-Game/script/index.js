const holder = document.getElementById("holder")
const sound1 = document.getElementById("sound1")
const sound2 = document.getElementById("sound2")
const sound3 = document.getElementById("sound3")

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const fetchUsers = async () => {

    try {
        const res = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
        if (!res.ok) {
            throw new Error(res.status);
        }
        const data = await res.json();
        console.log(data);

        // loop the questions
        const fullData = data.results
        for(let i = 0; i < fullData.length; i++){
           console.log( fullData[i])

            // display Question
            const questionP = document.createElement("P")
            questionP.innerHTML = fullData[i].question
            holder.appendChild(questionP)

           // create input
            const userInput = document.createElement("input")
            userInput.type = "text"
            userInput.value = ""
            holder.appendChild(userInput)

            // create button
            const button = document.createElement("button")
            button.innerHTML = "Submit"
            holder.appendChild(button)

            // Check answer function
           button.addEventListener('click', function checkAnswer(){
            userInputValue = userInput.value
                if( userInputValue == fullData[i].correct_answer){
                    console.log("success")
                    sound1.play()
                }else{
                    console.log("fail")
                    sound2.play()
                }
            })
           }
    } catch (error) {
        console.log(error);
    }
}

fetchUsers();



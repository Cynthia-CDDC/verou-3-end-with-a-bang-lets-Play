const holder = document.getElementById("holder")



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

            const answersBoolean = fullData[i].correct_answer

            button.addEventListener('click', function checkAnswer(){
                if(userInput.value === answersBoolean){
                    console.log("Great Job")
                }else{
                    console.log("fail")
                }
            })
            
            
            
           
        }
    } catch (error) {
        console.log(error);
    }
}

fetchUsers();



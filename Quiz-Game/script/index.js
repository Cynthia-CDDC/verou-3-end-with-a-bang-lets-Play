const answer = document.getElementById("answer")

const fetchUsers = async () => {
    try {
        const res = await fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=boolean');
        if (!res.ok) {
            throw new Error(res.status);
        }
        const data = await res.json();
        console.log(data);

        // loop the questions
        const question = data.results
        for(let i = 0; i < question.length; i++){
           console.log( question[i])
           const p = document.createElement("P")
           p.innerHTML = question[i].question
           answer.appendChild(p)
        }
    } catch (error) {
        console.log(error);
    }
}

fetchUsers();
import { score } from "./index.js";

export function getSum(){
    const scoreHolder = document.getElementById("scoreHolder")
    scoreHolder.id = "scoreHolder"
    const sum = score.reduce((a, b) => a + b, 0);
    scoreHolder.innerHTML = sum
}



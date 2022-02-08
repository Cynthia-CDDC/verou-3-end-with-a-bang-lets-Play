import { score } from "./question.js";

export function getSum(){
    const scoreHolder = document.getElementById("scoreHolder")
    const sum = score.reduce((a, b) => a + b, 0);
    scoreHolder.innerHTML = sum
}



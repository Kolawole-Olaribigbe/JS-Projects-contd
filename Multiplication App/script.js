const num1 = Math.ceil(Math.random() * 10) 
const num2 = Math.ceil(Math.random() * 10)

const questionComp = document.getElementById("question")
const inputComp = document.getElementById("input")
const formComp = document.getElementById("form")
const scoreComp = document.getElementById("score")
let score = JSON.parse(localStorage.getItem("score"))

if(!score){
    score = 0
}
scoreComp.innerText = `score: ${score}`

questionComp.innerText = `What is ${num1} multiplied by ${num2}?`

const correctAnswer = num1 * num2

formComp.addEventListener("submit", () =>{
    const userAns = + inputComp.value
    if(userAns === correctAnswer){
        score++
        updateLocalStorage()
    } else {
        score--
        updateLocalStorage()
    }
})
function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}


const buttons = document.querySelectorAll("button")
const resultComp = document.getElementById("result")
const userScore = document.getElementById("user-score")
const compScore = document.getElementById("computer-score")

let playerScore = 0
let computerScore = 0

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        const result = playRound(button.id, computerPlay())
        resultComp.textContent = result
        console.log(result);
    })
})
function computerPlay() {
    const choices = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!"
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++
        userScore.textContent = playerScore
        return "You win! " + playerSelection + " beats " + computerSelection
    } else {
        computerScore++
        compScore.textContent = computerScore
        return "You lose! " + computerSelection + " beats " + playerSelection
    }
}
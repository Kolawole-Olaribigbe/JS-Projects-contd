const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")
const timerComp = document.getElementById("timer")

let interval
let timeLeft = 1500

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

    timerComp.innerHTML = formattedTime
}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--
        updateTimer()

        if (timeLeft === 0) {
            clearInterval(interval)
            alert("Time elapsed")
            timeLeft = 1500
            updateTimer()
        }
    }, 1000)
    
}
function stopTimer() {
    clearInterval(interval)
    
}
function resetTimer() {
    clearInterval(interval)
    timeLeft = 1500
    updateTimer()
    
}
startBtn.addEventListener("click", startTimer)
stopBtn.addEventListener("click", stopTimer)
resetBtn.addEventListener("click", resetTimer)
const inputComp = document.getElementById("input")
const errorComp = document.getElementById("error")
const resultComp = document.getElementById("result")

let errorTime
let resultTime

function updateResults() {
    if (inputComp.value <= 0 || isNaN(inputComp.value)) {
        errorComp.innerText = "Enter a valid input"
        clearTimeout(errorTime)
        errorTime = setTimeout(() => {
            errorComp.innerText = ""
            inputComp.value = ""
        }, 2000);
    } else {
        resultComp.innerText = (+inputComp.value / 2.2).toFixed(2)
        clearTimeout(resultTime)
        resultTime = setTimeout(() => {
            resultComp.innerText = ""
            inputComp.value = ""
        }, 10000);
    }
}

inputComp.addEventListener("input", updateResults)
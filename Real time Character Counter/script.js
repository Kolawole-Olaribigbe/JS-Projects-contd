const textArea = document.getElementById("textarea")
const totalCounter = document.getElementById("total-counter")
const remainingChar = document.getElementById("remaining-counter")

textArea.addEventListener("keyup", () => {
    updateCounter()
})
updateCounter()

function updateCounter() {
    totalCounter.innerText = textArea.value.length
    remainingChar.innerText = textArea.getAttribute("maxLength") - textArea.value.length
}
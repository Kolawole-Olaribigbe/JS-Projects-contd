const ratingComponents = document.querySelectorAll(".rating")
const btnComp = document.getElementById("btn")
const containerEl = document.getElementById("container")
let selectedRating = ""

ratingComponents.forEach((ratingComponent) =>{
    ratingComponent.addEventListener("click", (event) =>{
        removeActive()
        selectedRating = event.target.innerText || event.target.parentNode.innerText
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    })
})
btnComp.addEventListener("click", () => {
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>${selectedRating}</strong>
        <p>We will use your feedback to improve our customer support</p>
        `
    }
})

function removeActive(){
    ratingComponents.forEach((ratingComponent) => {
        ratingComponent.classList.remove("active")
    })
}
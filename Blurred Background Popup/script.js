const containerM = document.querySelector(".container")
const btnM = document.querySelector(".btn")
const popupContainer = document.querySelector(".popup-container")
const closeIcon = document.querySelector(".close-icon")

btnM.addEventListener("click", ()=> {
    containerM.classList.add("active")
    popupContainer.classList.remove("active")
})

closeIcon.addEventListener("click", () => {
    popupContainer.classList.remove("active")
    containerM.classList.add("active")

})
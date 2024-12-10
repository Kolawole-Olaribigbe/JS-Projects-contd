const btnComp = document.querySelector(".btn")
const closeIcon = document.querySelector(".close-icon")
const trailerContainer = document.querySelector(".trailer-container")
const videoComp = document.querySelector("video")

btnComp.addEventListener("click", () => {
    trailerContainer.classList.remove("active")
})
closeIcon.addEventListener("click", () => {
    trailerContainer.classList.add("active")
    videoComp.pause()
    videoComp.currentTime = 0
})
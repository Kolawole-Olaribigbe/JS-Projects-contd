const imageContainer = document.querySelector(".image-container")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")

let x = 0
let timer 

prevBtn.addEventListener("click", () => {
    x = x + 45
    clearTimeout(timer)
    updateGallery()
})
nextBtn.addEventListener("click", () => {
    x = x - 45
    clearTimeout(timer)
    updateGallery()
})

function updateGallery() {
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`
    timer = setTimeout(() => {
        x = x - 45
        updateGallery()
    }, 3000)
}
updateGallery()
const bgImg = document.getElementById("bg-img")

window.addEventListener("scroll", () =>{
    updateImage()
})

function updateImage(){
    bgImg.style.opacity = 1 - window.scrollY / 900
    bgImg.style.backgroundSize = 160 - window.scrollY / 12 + "%"
}
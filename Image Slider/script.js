const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
const imgcontainerComp = document.querySelector(".img-container")
const imagesComp = document.querySelectorAll("img")
let currentImg = 1
let timeout

nextBtn.addEventListener("click", () => {
    currentImg++
    clearTimeout(timeout)
    updateImg()
})
prevBtn.addEventListener("click", () => {
    currentImg--
    clearTimeout(timeout) 
    updateImg()
})
function updateImg(){
    if(currentImg > imagesComp.length){
        currentImg = 1
    } else if(currentImg < 1){
        currentImg = imagesComp.length
    }
    imgcontainerComp.style.transform = `translateX(-${(currentImg - 1) * 500}px)`
    timeout = setTimeout(()=>{
        currentImg++
        updateImg()
    },3000)
}
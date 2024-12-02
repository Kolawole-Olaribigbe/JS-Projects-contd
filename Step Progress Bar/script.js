const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")
const stepsComp = document.querySelectorAll(".step")
const progressBar = document.querySelector(".progress-bar-front")
console.log(stepsComp);

let currentChecked = 1

nextBtn.addEventListener("click", () =>{
    currentChecked++
    if (currentChecked > stepsComp.length) {
        currentChecked = stepsComp.length
    }
    updateStepProgress()
})
prevBtn.addEventListener("click", () =>{
    currentChecked--
    if (currentChecked < 1) {
        currentChecked = 1
    }
    updateStepProgress()
})
function updateStepProgress() {
    stepsComp.forEach((stepComp, idx) => {
        if (idx < currentChecked) {
            stepComp.classList.add("checked")
            stepComp.innerHTML = `
            <i class="fa-solid fa-check"></i> 
            <small>
            ${idx === 0 ? "Start" : idx === stepsComp.length - 1 ? "Final" : "Step " + idx}
            </small>`
        } else {
            stepComp.classList.remove("checked")
            stepComp.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        }
    })
    const stepsChecked = document.querySelectorAll(".checked")
    
    progressBar.style.width = ((stepsChecked.length - 1) / (stepsComp.length - 1)) * 100 + "%"

    if (currentChecked === 1) {
        prevBtn.disabled = true
    } else if (currentChecked === stepsComp.length) {
        nextBtn.disabled = true
    } else {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}
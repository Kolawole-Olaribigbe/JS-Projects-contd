const counterComp = document.querySelector(".counter")
const loadingBarComp = document.querySelector(".loading-bar-front")

let index = 0

updateNum()

function updateNum() {
    counterComp.innerText = index + "%"
    loadingBarComp.style.width = index + "%"
    index++
    if(index < 101) {
        setTimeout(updateNum, 20)
    }
}
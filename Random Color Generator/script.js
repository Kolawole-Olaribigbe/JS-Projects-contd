const containerComp = document.querySelector(".container")

for (let index = 0; index < 30; index++) {
    const colorContainerComps = document.createElement("div") 
    colorContainerComps.classList.add("color-container")
    containerComp.appendChild(colorContainerComps)
    
}
const colorContainerComps = document.querySelectorAll(".color-container")

generateColors()
function generateColors() {
    colorContainerComps.forEach((colorContainerComp) => {
        const newColorCode = randomColor()
        colorContainerComp.style.backgroundColor = "#" + newColorCode
        colorContainerComp.innerText = "#" + newColorCode
    });
}
function randomColor() {
    const chars = "0123456789abcdef"
    const colorCodeLength = 6
    let colorCode =""

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        colorCode += chars.substring(randomNum, randomNum + 1)
    }
    return colorCode
}
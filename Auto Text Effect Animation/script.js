const containerElement = document.querySelector(".container")

const careers = ["Software Architect", "Machine Learning Engineer", "Full-Stack Developer","Freelance Web Developer", 
    "Comic Writer", "Stylish Man", "Athlete"]

let careersIndex = 0
let charIndex = 0

updateText()

function updateText(){
    charIndex++
    containerElement.innerHTML = `
    <h1>I am ${careers[careersIndex].slice(0,1) === "A" ? "an" : "a"} 
        ${careers[careersIndex].slice(0,charIndex)}</h1>`

    if(charIndex === careers[careersIndex].length){
        careersIndex++
        charIndex = 0
    }
    if(careersIndex === careers.length){
        careersIndex = 0
    }
    setTimeout(updateText, 400)
}


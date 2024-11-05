const inputField = document.getElementById("input")
const infoText = document.getElementById("info-text")
const wordMeaning = document.getElementById("word-meaning")
const wordDef = document.getElementById("word")
const wordMean = document.getElementById("meaning")
const audioComp = document.getElementById("audio")

async function fetchAPI(word){
    try {
        infoText.style.display = "block"
        wordMeaning.style.display = "none"
        infoText.innerText = `Searching the meaning of "${word}"`
        
        const url =`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res) => res.json())

        if(result.title){
            wordMeaning.style.display = "block"
            infoText.style.display = "none"
            wordDef.innerText = word
            wordMean.innerText = "Not Available"
            audioComp.src = "none"
        } else {
            infoText.style.display = "none"
            wordMeaning.style.display = "block"
            audioComp.style.display = "inline-flex"
            wordDef.innerText = result[0].word
            wordMean.innerText = result[0].meanings[0].definitions[0].definition
            audioComp.src = result[0].phonetics[0].audio
        }
    } catch (error) {
        console.log(error)
        infoText.innerText = `An error occurred, try again`        
    }
}

inputField.addEventListener("keyup", (e) =>{
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value)
    }
})
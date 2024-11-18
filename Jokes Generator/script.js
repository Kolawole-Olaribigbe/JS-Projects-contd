const btnComp = document.getElementById("btn")
const jokeComp = document.getElementById("joke")

const apiKey = "mEGryen0w3F6pIEzjvBmWQ==uY9qMXdaVNi0zzGi"
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    }
}
const apiURL = "https://api.api-ninjas.com/v1/jokes"

async function getJoke() {
    try {
        jokeComp.innerText = "Loading joke..."
        btnComp.disabled = true
        btnComp.innerText = "Loading"

        const response = await fetch(apiURL, options)
        const data = await response.json()

        btnComp.disabled = false
        btnComp.innerText = "Tell me a joke"
        
        jokeComp.innerText = data[0].joke
        
    } catch (error) {
        jokeComp.innerText = "An error occurred"
        btnComp.disabled = false
        btnComp.innerText = "Tell me a joke"
        console.log(error)
    }
}
btnComp.addEventListener("click", getJoke)
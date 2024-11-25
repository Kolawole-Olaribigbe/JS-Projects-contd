const btnComp = document.getElementById("btn")
const quoteComp = document.getElementById("quote")
const authorComp = document.getElementById("author")

const apiKey = "mEGryen0w3F6pIEzjvBmWQ==uY9qMXdaVNi0zzGi"
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    }
}
const apiURL = "https://api.api-ninjas.com/v1/quotes"

async function getQuote() {
    try {
        btnComp.innerText = "Loading..."
        btnComp.disabled = true
        quoteComp.innerText = "Generating quote..."
        authorComp.innerText = "Getting author..."
        const response = await fetch(apiURL, options)
        const data = await response.json()
    
        const quoteContent = data[0].quote
        const quoteAuthor = data[0].author
    
        quoteComp.innerText = quoteContent
        authorComp.innerText = "~ "+ quoteAuthor
        btnComp.innerText = "Get Quote"
        btnComp.disabled = false
    } catch (error) {
        quoteComp.innerText = "An error occurred"
        authorComp.innerText = "Error"
        btnComp.innerText = "Get Quote"
        btnComp.disabled = false
    }
}
getQuote()
btnComp.addEventListener("click", getQuote)
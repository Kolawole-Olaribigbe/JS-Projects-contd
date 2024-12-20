const accessKey = 'QU5b0OGtC9SrGk6wnKqr1OIvNojwJU2nYn-ase9w34I'

const formComp = document.querySelector("form")
const searchInput = document.getElementById("search-input")
const searchResult = document.querySelector(".search-results")
const showMoreBtn = document.getElementById("show-more")

let inputData = ""
let page = 1

async function searchImages() {
    inputData = searchInput.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    const response = await fetch(url)
    const data = await response.json()
    
    if(page === 1 ) {
        searchResult.innerHTML = ""
    }

    const results = data.results
    results.map((results) =>{
        const imageWrapper = document.createElement("div")
        imageWrapper.classList.add("results")
        const image = document.createElement("img")
        image.src = results.urls.small
        image.alt = results.alt_description
        const imageLink = document.createElement("a")
        imageLink.href = results.links.html
        imageLink.target = "_blank"
        imageLink.textContent = results.alt_description

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResult.appendChild(imageWrapper)
    })
    page++
    

    if (page > 1) {
        showMoreBtn.style.display = "block"
    }
}

formComp.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1
    searchImages()
})
showMoreBtn.addEventListener("click", () => {
    searchImages()
})
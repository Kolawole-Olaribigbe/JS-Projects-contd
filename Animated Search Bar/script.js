const searchBarContainer = document.querySelector(".search-bar")
const magnifierIcon = document.querySelector(".magnifier")


magnifierIcon.addEventListener("click", () =>{
    searchBarContainer.classList.toggle("active")
})
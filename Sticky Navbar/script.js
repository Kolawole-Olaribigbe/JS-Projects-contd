const navBar = document.querySelector(".navbar")
const bottomContainer = document.querySelector(".bottom-container")

console.log(bottomContainer.offsetHeight)
console.log(bottomContainer.offsetTop)

window.addEventListener("scroll", () => {
    if (window.scrollY > bottomContainer.offsetTop - navBar.offsetHeight - 50) {
        navBar.classList.add("active")
    } else {
        navBar.classList.remove("active")
    }
})
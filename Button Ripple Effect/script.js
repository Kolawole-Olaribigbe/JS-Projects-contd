const btnComp = document.querySelector(".btn")

btnComp.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btnComp.offsetLeft)
    const y = (event.pageY - btnComp.offsetTop)

    btnComp.style.setProperty("--xPos", x + "px")
    btnComp.style.setProperty("--yPos", y + "px")
})
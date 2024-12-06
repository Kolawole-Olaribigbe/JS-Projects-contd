const formComp = document.querySelector('.form')
const inputComp = document.querySelector(".input")
const ulComp = document.querySelector(".list")

let list = JSON.parse(localStorage.getItem("list"))

list.forEach(task => {
    toDoList()
})
formComp.addEventListener("submit", (event) => {
    event.preventDefault()
    toDoList()
})

function toDoList(task) {
    let newTask = inputComp.value
    if (task) {
        newTask = task.name
    }
    const listElement = document.createElement("li")
    if (task && task.checked) {
        listElement.classList.add("checked")
    }
    listElement.innerText = newTask
    ulComp.appendChild(listElement)
    inputComp.value = ""

    const checkBtn = document.createElement("div")
    checkBtn.innerHTML = `<i class="fa-solid fa-square-check"></i>`
    listElement.appendChild(checkBtn)

    const trashBtn = document.createElement("div")
    trashBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    listElement.appendChild(trashBtn)

    checkBtn.addEventListener("click", () => {
        listElement.classList.toggle("checked")
        updateLocalStorage()
    })
    trashBtn.addEventListener("click", () => {
        listElement.remove()
        updateLocalStorage()
    })
    updateLocalStorage()
}
function updateLocalStorage() {
    const listElements = document.querySelectorAll("li")
    list = []
    listElements.forEach(listElement => {
        list.push({
            name: listElement.innerText,
            checked: listElement.classList.contains("checked")
        })
    })
    localStorage.setItem("list", JSON.stringify(list))
}
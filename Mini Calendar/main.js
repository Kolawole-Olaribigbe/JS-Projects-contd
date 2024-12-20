const monthName = document.getElementById("month-name")
const dayName = document.getElementById("day-name")
const dateNum = document.getElementById("date-no")
const yearId = document.getElementById("year")

const date = new Date()
const month = date.getMonth()

monthName.innerText = date.toLocaleString("en", {
    month: "long"
})
dayName.innerText = date.toLocaleString("en", {
    weekday: "long"
})
dateNum.innerText = date.getDate()
yearId.innerText = date.getFullYear()

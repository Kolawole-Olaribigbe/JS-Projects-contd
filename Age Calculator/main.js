const btnComp = document.getElementById("btn")
const birthdateInput = document.getElementById("birthdate")
const resultComp = document.getElementById("result")

function calculateAge() {
    const birthdateValue = birthdateInput.value
    if (birthdateValue === "") {
        alert("Select date of birth")
    } else {
        const age = getAge(birthdateValue)
        resultComp.innerText = `Your are ${age} ${age > 1 ? "years" : "year"} old`
    }
}

function getAge(birthdateValue) {
    const currentDate = new Date()
    const birthDate = new Date(birthdateValue)
    let age = currentDate.getFullYear() - birthDate.getFullYear()
    const month = currentDate.getMonth() - birthDate.getMonth()

    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--
    }
    return age
}
btnComp.addEventListener("click", calculateAge)
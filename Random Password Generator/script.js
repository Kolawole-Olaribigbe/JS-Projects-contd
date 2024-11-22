const btnComp = document.querySelector(".btn")
const inputComp = document.getElementById("input")
const copyIcon = document.querySelector(".fa-copy")
const alertComp = document.querySelector(".alert-container")

btnComp.addEventListener("click", () => {
    generatePassword()
})

copyIcon.addEventListener("click", () => {
    copyPassword()

    if (inputComp.value) {
        alertComp.classList.remove("active")
        setTimeout(() => {
            alertComp.classList.add("active")
        }, 2000)
    }
})

function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+~|}{[]><?-="
    const passwordLength = 14

    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1)
    }
    inputComp.value = password
    alertComp.innerText = "Copied"
}

function copyPassword() {
    inputComp.select()
    inputComp.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(inputComp.value)
}
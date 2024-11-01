const firstCurr = document.getElementById("first-curr")
const firstValue = document.getElementById("first-value")

const secondCurr = document.getElementById("second-curr")
const secondValue = document.getElementById("second-value")

const exchangeRate = document.getElementById("exchange-rate")

updateRate()

function updateRate(){
    const api_key = `7f86389893ca4e87e9b4c398`
    const url = `https://v6.exchangerate-api.com/v6/${api_key}/latest/${firstCurr.value}`

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const rate = data.conversion_rates[secondCurr.value]
        console.log(rate)
        exchangeRate.innerText = `1 ${firstCurr.value} = ${rate + " " + secondCurr.value}`

        secondValue.value = (firstValue.value * rate).toFixed(2)
    })
}

firstCurr.addEventListener("change", updateRate)
secondCurr.addEventListener("change", updateRate)
firstValue.addEventListener("input", updateRate)

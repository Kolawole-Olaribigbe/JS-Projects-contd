const celsiusInput = document.getElementById("celsius")
const fahrenheitInput = document.getElementById("fahrenheit")
const kelvinInput = document.getElementById("kelvin")

function calculateTemp(event) {
    const currentValue = +event.target.value
    
    switch (event.target.name) {
        case "celsius":
            kelvinInput.value = (currentValue + 273.32).toFixed(2)
            fahrenheitInput.value = (currentValue * 1.8 + 32).toFixed(2)
            break;
        case "fahrenheit":
            celsiusInput.value = ((currentValue - 32) / 1.8).toFixed(2)
            kelvinInput.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2)
            break
        case "kelvin":
            celsiusInput.value = (currentValue - 273.32).toFixed(2)
            fahrenheitInput.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2)
            break
        default:
            break;
    }
}
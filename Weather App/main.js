// API key
const apiKey = "ebf79a078f2a9eae6a08a925410d1b1e"
//DOM manipulation
const weatherDataComp = document.getElementById("weather-data")
const cityInput = document.getElementById("city-input")
const formComp = document.querySelector("form")
// Adding functionality
formComp.addEventListener("submit", (event) => {
    event.preventDefault()
    const cityValue = cityInput.value
    getWeatherData(cityValue)
})
// Asynchronous function to fetch data from API
async function getWeatherData(cityValue){
    // Try and catch for error handling
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        // Variable creation
        const data = await response.json()
        const temperature =Math.round(data.main.temp)
        const description = data.weather[0].description
        const icon = data.weather[0].icon
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`
        ]
        // Formatting JSON data
        weatherDataComp.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`
        weatherDataComp.querySelector(".temperature").textContent = `${temperature}°C`
        weatherDataComp.querySelector(".description").textContent = description
        weatherDataComp.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("")
    //Throws error
    } catch (error) {
        weatherDataComp.querySelector(".icon").innerHTML = ""
        weatherDataComp.querySelector(".temperature").textContent = ""
        weatherDataComp.querySelector(".description").textContent = "An error occurred, try again later"
        weatherDataComp.querySelector(".details").innerHTML = ""
        
    }
}
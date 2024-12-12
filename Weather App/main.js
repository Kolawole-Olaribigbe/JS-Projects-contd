const apiKey = "ebf79a078f2a9eae6a08a925410d1b1e"

const weatherDataComp = document.getElementById("weather-data")
const cityInput = document.getElementById("city-input")
const formComp = document.querySelector("form")

formComp.addEventListener("submit", (event) => {
    event.preventDefault()
    const cityValue = cityInput.value
    getWeatherData(cityValue)
})
async function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        const data = await response.json()
        const temperature =Math.round(data.main.temp)
        const description = data.weather[0].description
        const icon = data.weather[0].icon
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`
        ]
        weatherDataComp.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`
        weatherDataComp.querySelector(".temperature").textContent = `${temperature}°C`
        weatherDataComp.querySelector(".description").textContent = description
        weatherDataComp.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("")
    } catch (error) {
        weatherDataComp.querySelector(".icon").innerHTML = ""
        weatherDataComp.querySelector(".temperature").textContent = ""
        weatherDataComp.querySelector(".description").textContent = "An error occurred, try again later"
        weatherDataComp.querySelector(".details").innerHTML = ""
        
    }
}
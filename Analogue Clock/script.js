const hourHand = document.querySelector(".hour")
const minuteHand = document.querySelector(".minute")
const secondHand = document.querySelector(".seconds")

function updateClock(){
    const currentDate = new Date()
    //setTimeout(updateClock, 1000)

    const hour = currentDate.getHours()
    const minute = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const hourDeg = (hour / 12) * 360
    hourHand.style.transform = `rotate(${hourDeg}deg)`
    const minuteDeg = (hour / 60) * 360
    hourHand.style.transform = `rotate(${minuteDeg} deg)`
    const secondDeg = (hour / 60) * 360
    hourHand.style.transform = `rotate(${secondDeg}deg)`
}

//updateClock()
setInterval(updateClock, 1000)
const counterComponents = document.querySelectorAll(".counter")


counterComponents.forEach(counterComp => {
    counterComp.innerText = "0"
    incrementCounter()

    function incrementCounter(){
        const currentNum = +counterComp.innerText
        const dataCeil = counterComp.getAttribute("data-ceil") 
        const increment = dataCeil / 15
        currentNum = Math.ceil(currentNum + increment)
        
        if(currentNum < dataCeil){
            counterComp.innerText = currentNum
            setTimeout(incrementCounter, 50)
        } else {
            counterComp.innerText = dataCeil
        }
    }
})
const btnComp = document.getElementById("btn")
const bmiInput = document.getElementById("bmi-result")
const bmiCond = document.getElementById("bmi")

function calculateBMI(){
    const heightValue = document.getElementById("height").value / 100
    const weightValue = document.getElementById("weight").value

    const bmiValue = weightValue / (heightValue * heightValue)
    bmiInput.value = bmiValue

    if(bmiValue < 18.5){
        bmiCond.innerText = "Underweight"
    }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        bmiCond.innerText = "Normal"
    }else if(bmiValue >= 25 && bmiValue <= 29.9){
        bmiCond.innerText = "Overweight"
    }else if(bmiValue >= 30){
        bmiCond.innerText = "Obesity"
    }
}

btnComp.addEventListener("click", calculateBMI)
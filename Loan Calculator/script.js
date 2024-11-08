function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value
    interestRateValue = document.getElementById("interest-rate").value
    loanPeriod = document.getElementById("loan-period").value

    interest = (loanAmountValue * (interestRateValue * 0.01)) / loanPeriod
    monthlyPayment = (loanAmountValue / loanPeriod + interest).toFixed(2)

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`
}
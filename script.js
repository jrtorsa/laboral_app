// Prevent keystroke 'e' for input numbers 
const inputs = document.querySelectorAll("input")
inputs.addEventListener("keydown", function(event) {
    if (event.which === 69) {
      event.preventDefault();
    }
});
//keystroke.addEventListener("keystroke", function(event) {
  //  if (!/^\d+(?:\.\d{1,2})?$/.test(event.target.value)) {
    //    event.preventDefault();
   // } 
//})

//Values in table 1
const paycheckElement = document.getElementById("paycheck");
const bonusElement = document.getElementById("bonus");
const yearElement = document.getElementById("year");
const monthElement =  document.getElementById("month");

//Button operation

//Result values in table 2
const integratedDailySalaryElement = document.getElementById("daily-result")

const form = document.getElementById("payment-compensation-form")
form.addEventListener("submit", calculateCompensation)

function calculateCompensation(e){
    e.preventDefault()
    const salary = +paycheckElement.value;
    const period = +document.querySelector('input[name="payment-period"]:checked').value
    const bonus = +bonusElement.value;
    const years = +yearElement.value;
    const months = +monthElement.value;
    if(!years && !months){
        alert('Ingrese el tiempo laborado')
        return
    }
    console.log({salary, period, bonus, years, months})
    const dailySalary = salary / period;
    const yearlyBonus = dailySalary * 15 / 365
    const integratedDailySalary = (dailySalary + yearlyBonus).toFixed(2);
    integratedDailySalaryElement.value = integratedDailySalary
}


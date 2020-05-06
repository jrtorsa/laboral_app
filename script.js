// Prevent keystroke 'e' for input numbers 
const input = document.querySelectorAll("input")
input.forEach(inp => inp.addEventListener("keydown", function(event) {
    if (event.which === 69) {
      event.preventDefault();
    }
}));
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
    console.log(years, months)
    if(!years && !months){
        alert('Ingrese el tiempo laborado')
        return
    }
    console.log({salary, period, bonus, years, months})
    const dailySalary = salary / period;
    const yearlyBonus = dailySalary * 15 / 365
    const holydaysPerYearEquivalence = {
        1: 6,
        2: 8,
        3: 10,
        4: 12,
        5: 14,
        6: 14,
        7: 14,
        8: 14,
        9: 14,
        10: 16,
        11: 16,
        12: 16,
        13: 16,
        14: 16,
        15: 18,
        16: 18,
        17: 18,
        18: 18,
        19: 18,
        20: 20,
        21: 20,
        22: 20,
        23: 20,
        24: 20,
        25: 22,
        26: 22,
        27: 22,
        28: 22,
        29: 22,
    }
}


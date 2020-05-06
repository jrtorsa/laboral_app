const MIN_YEARS = 1;
const FIRST_WORKED_YEARS = 4;
const SECOND_CYCLE_YEARS_INIT = FIRST_WORKED_YEARS + 1;
const DAYS_PER_FIRST_YEAR = 6;
const INCREMENT_DAYS_PER_YEAR = 2;
const MAX_DAYS_ALLOWED = 22;
const SECOND_CYCLE_YEARS_END = 24;
// Prevent keystroke 'e' for input numbers
const input = document.querySelectorAll("input");
input.forEach((inp) =>
  inp.addEventListener("keydown", function (event) {
    if (event.which === 69) {
      event.preventDefault();
    }
  })
);
//keystroke.addEventListener("keystroke", function(event) {
//  if (!/^\d+(?:\.\d{1,2})?$/.test(event.target.value)) {
//    event.preventDefault();
// }
//})

//Values in table 1
const paycheckElement = document.getElementById("paycheck");
const bonusElement = document.getElementById("bonus");
const yearElement = document.getElementById("year");
const monthElement = document.getElementById("month");

//Button operation

//Result values in table 2
const integratedDailySalaryElement = document.getElementById("daily-result");

const form = document.getElementById("payment-compensation-form");
form.addEventListener("submit", calculateCompensation);

function calculateCompensation(e) {
  e.preventDefault();
  const salary = +paycheckElement.value;
  const period = +document.querySelector('input[name="payment-period"]:checked')
    .value;
  const bonus = +bonusElement.value;
  const years = +yearElement.value;
  const months = +monthElement.value;
  console.log(years, months);
  if (!years && !months) {
    alert("Ingrese el tiempo laborado");
    return;
  }
  console.log({ salary, period, bonus, years, months });
  const dailySalary = salary / period;
  const yearlyBonus = (dailySalary * 15) / 365;
}

const holidaysPerWorkedYears = (years) => {
  if (years < MIN_YEARS) return 0;
  if (years <= FIRST_WORKED_YEARS) return daysPerYears(years);
  if (years <= SECOND_CYCLE_YEARS_END) return daysPerYears(secondCycle(years));
  return MAX_DAYS_ALLOWED;
};

const daysPerYears = (years) =>
  DAYS_PER_FIRST_YEAR + (years - 1) * INCREMENT_DAYS_PER_YEAR;

const secondCycle = (years) =>
  SECOND_CYCLE_YEARS_INIT + Math.floor(years / SECOND_CYCLE_YEARS_INIT) - 1;

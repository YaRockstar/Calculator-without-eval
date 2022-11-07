import Calculator from './calculator.js';

const calc = document.querySelector('.calc');
calc.addEventListener('click', event => Calculator.addSymbol(event));

const result = document.querySelector('.equal');
result.addEventListener('click', Calculator.calculate);

const clearAll = document.querySelector('.ac');
clearAll.addEventListener('click', Calculator.clearAll);

const changeSign = document.querySelector('.plus-minus');
changeSign.addEventListener('click', Calculator.changeSign);

const calcPercent = document.querySelector('.percent');
calcPercent.addEventListener('click', Calculator.calcPercent);

const body = document.querySelector('body');
body.addEventListener('keyup', event => {
  const key = event.key;
  if (!isNaN(+key)) {
    const screen = document.querySelector('.calc-screen p');
    if (screen.textContent === '0') {
      screen.textContent = key;
    } else if (!isNaN(+screen.textContent)) {
      screen.textContent += key;
    }
  }
});

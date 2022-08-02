export default class Calculator {
  static leftOperand = '';
  static operator = '';
  static rigthOperand = '';
  static result = '0';

  static render() {
    document.querySelector('.calc-screen p').textContent = Calculator.result;
  }

  static calculate() {
    switch (Calculator.operator) {
      case '+':
        Calculator.sum(+Calculator.leftOperand, +Calculator.rigthOperand);
        break;
      case '-':
        Calculator.sum(+Calculator.leftOperand, +(-Calculator.rigthOperand));
        break;
      case 'x':
        Calculator.multiply(+Calculator.leftOperand, +Calculator.rigthOperand);
        break;
      case '/':
        Calculator.divide(+Calculator.leftOperand, +Calculator.rigthOperand);
        break;  
      default:
        break;
    }
    Calculator.render();
    Calculator.setNextSettings();
  }

  static clearAll() {
    Calculator.setDefault();
    Calculator.render();
  }

  static changeSign() {
    const number = +document.querySelector('.calc-screen p').textContent;
    if (number !== 0 && !isNaN(number) && isFinite(number)) {
      if (Calculator.operator) {
        Calculator.rigthOperand = -number;
      } else {
        Calculator.leftOperand = -number;
      }
      Calculator.result = -number;
      Calculator.render();
    } 
  }

  static calcPercent() {
    const number = +document.querySelector('.calc-screen p').textContent;
    if (number !== 0 && !isNaN(number) && isFinite(number)) {
      if (Calculator.operator) {
        Calculator.rigthOperand = number / 100;
      } else {
        Calculator.leftOperand = number / 100;
      }
      Calculator.result = number / 100;
      Calculator.render();
    } 
  }

  static addSymbol(event) {
    const isNumber = event.target.classList.contains('number');
    const isOperator = event.target.classList.contains('operator');
    const isDot = event.target.classList.contains('dot');
    const value = event.target.innerText;
  
    if (isNumber) {
      Calculator.addNumber(value);
    } 
  
    if (isOperator) {
      Calculator.addOperator(value);
    }
  
    if (isDot) {
      Calculator.addDot(value);
    }
  }

  static addNumber(value) {
    if (Calculator.leftOperand && Calculator.operator) {
      Calculator.rigthOperand += value;
      Calculator.result = Calculator.rigthOperand;
    } else {
      Calculator.leftOperand += value;
      Calculator.result = Calculator.leftOperand;
    }
    Calculator.render();
  }

  static addOperator(value) {
    if (Calculator.leftOperand && !Calculator.operator) {
      Calculator.operator = value;
      Calculator.result = value;
      Calculator.render();
    }
  }

  static addDot(value) {
    if (Calculator.leftOperand && !Calculator.operator && !Calculator.leftOperand.includes('.')) {
      Calculator.leftOperand += value;
      Calculator.result = Calculator.leftOperand;
    } else if (Calculator.rigthOperand && !Calculator.rigthOperand.includes('.')) {
      Calculator.rigthOperand += value;
      Calculator.result = Calculator.rigthOperand;
    }
    Calculator.render();
  }

  static sum(a, b) {
    Calculator.result = (a + b);
  }

  static multiply(a, b) {
    Calculator.result = +(a * b).toFixed(3);
  }

  static divide(a, b) {
    if (b !== 0) {
      Calculator.result = +(a / b).toFixed(3);
      return;
    }
    Calculator.result = 'Error!';
  }

  static setDefault() {
    Calculator.result = '0';
    Calculator.leftOperand = '';
    Calculator.operator = '';
    Calculator.rigthOperand = '';
  }

  static setNextSettings() {
    Calculator.leftOperand = Calculator.result;
    Calculator.operator = '';
    Calculator.rigthOperand = '';
  }
}
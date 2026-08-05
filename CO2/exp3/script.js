let currentOperand = '0';
let previousOperand = '';
let operation = undefined;

const currentDisplay = document.getElementById('current-operand');
const previousDisplay = document.getElementById('previous-operand');

function updateDisplay() {
    currentDisplay.innerText = currentOperand;
    if (operation != null) {
        previousDisplay.innerText = `${previousOperand} ${operation}`;
    } else {
        previousDisplay.innerText = '';
    }
}

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    if (currentOperand === '0' && number !== '.') {
        currentOperand = number.toString();
    } else {
        currentOperand = currentOperand.toString() + number.toString();
    }
    updateDisplay();
}

function appendOperator(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '0';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function deleteNumber() {
    if (currentOperand === '0') return;
    currentOperand = currentOperand.toString().slice(0, -1);
    if (currentOperand === '') currentOperand = '0';
    updateDisplay();
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation.toString();
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

function scientific(func) {
    const current = parseFloat(currentOperand);
    if (isNaN(current)) return;
    
    let result;
    switch(func) {
        case 'sin':
            result = Math.sin(current * Math.PI / 180);
            break;
        case 'cos':
            result = Math.cos(current * Math.PI / 180);
            break;
        case 'tan':
            result = Math.tan(current * Math.PI / 180);
            break;
        case 'sqrt':
            result = Math.sqrt(current);
            break;
    }
    currentOperand = result.toFixed(8).replace(/\.?0+$/, "");
    updateDisplay();
}

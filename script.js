console.log('hello world');

let data = { //fancy data storage
    num1:0,
    num2:0,
    operator:'',
}

let buttons = document.querySelectorAll('.numberButton'); //select number buttons
let clearBtn = document.querySelector('.clearButton'); // All clear button
let delete = document.querySelector('.deleteButton'); //Delete button
let display = document.getElementById('display'); //display window

display.maxLength = '8';

buttons.forEach(function(button) { // add listeners to numbers only
    button.addEventListener('click', function() {
        if (display.innerHTML == '0') {
            display.innerHTML = this.value
        } else {
            display.innerHTML += this.value;
        }
    });
});

clearBtn.addEventListener('click', function() { //All Clear
    display.innerHTML = 0;
});

function add (x,y) { //addition operator
    return x + y;
};

function subtract(x,y) { // subtraction operator
    return x - y;
};

function multiply(x,y) { //mulitplication operator
    return x * y;
}

function divide(x,y) { //division operator
    return x / y;
}

function operate(operator, x, y) { // EQUALS BUTTON PROGRAM
    if (operator == '/') {
        return divide(x,y);
    } else if (operator == '*') {
        return multiply(x,y);
    } else if (operator == '+') {
        return add(x,y);
    } else if (operator == '-') {
        return subtract(x,y);
    } else {
        return 'ERROR';
    }
};


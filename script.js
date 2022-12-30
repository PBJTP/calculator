let data = { //fancy data storage
    num1:0,
    num2:0,
    operator:'',
}

let buttons = document.querySelectorAll('.numberButton'); //select number buttons
let decimal = document.querySelector('.decimalButton');
let clearBtn = document.querySelector('.clearButton'); // All clear button
let backspace = document.querySelector('.deleteButton'); //Delete button
let display = document.getElementById('display'); //display window
let operators = document.querySelectorAll('.opButton');
let equals = document.querySelector('.equalButton');

display.maxLength = '8'; //DOESNT WORK

buttons.forEach(function(button) { // add listeners to numbers only
    button.addEventListener('click', function() {
        if (display.innerHTML == '0') {
            display.innerHTML = this.value
        } else {
            display.innerHTML += this.value;
        }
    });
});

operators.forEach(function(button) {
    button.addEventListener('click', function(e) {
        data.operator = '';
        data.operator = this.value;
        data.num1 = Number(display.innerHTML);
        display.innerHTML = '0';


        console.log(data.num1);
        console.log(data.operator);
    })
});

equals.addEventListener('click', function() {
    if (!data.operator) {
        return;
    }
    data.num2 = Number(display.innerHTML);
    display.innerHTML = operate(data.operator, data.num1, data.num2);
    data.num1 = display.innerHTML;
})

clearBtn.addEventListener('click', function() { //All Clear
    display.innerHTML = 0;
});

// decimal.addEventListener('click', function() {   !!!!!!!!!PROJECT FOR LATER!!!!!!!!!
//     let array = display.innerHTML.split();
//     array.unshift('.');
//     let newValue = array.join('');
//     display.innerHTML = newValue;
// })

backspace.addEventListener('click', function() { //backspace button
    let array = display.innerHTML.split('');
    array.pop();
    let newValue = array.join('');
    display.innerHTML = newValue;
    if (!display.innerHTML) {
        display.innerHTML = '0';
    }
})

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

function operate(operators, x, y) { // EQUALS BUTTON PROGRAM
    if (operators == '/') {
        return divide(x,y);
    } else if (operators == '*') {
        return multiply(x,y);
    } else if (operators == '+') {
        return add(x,y);
    } else if (operators == '-') {
        return subtract(x,y);
    } else {
        return 'ERROR';
    }
    data.operator = '';
};


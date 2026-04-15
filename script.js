let currentInput = "";
let firstNumber = null;
let operator = null;
let shouldResetDisplay = false;
let result = null;

function handleNumberInput(value){

    if (shouldResetDisplay == true){
        currentInput = value;
        console.log(currentInput);
        shouldResetDisplay = false;
    } else{
        currentInput += value;
        console.log(currentInput);
    }

};

function handleOperator(op){
    if(firstNumber === null){
        firstNumber = currentInput;
    } else{
        result = operate(firstNumber, operator, currentInput)
        firstNumber = result
        currentInput = result
    }
    operator = op;
    shouldResetDisplay = true;
}

function operate(firstNumber, op, currentInput){
    firstNumber = Number(firstNumber);
    currentInput = Number(currentInput);

    if(op === "+"){
        return firstNumber + currentInput;
    } else if (op === "-"){
        return firstNumber - currentInput;
    } else if (op === "*"){
        return firstNumber * currentInput;
    } else if (op === "/"){
        if(currentInput === 0){
        return "cannot divided by 0"
        }
        return firstNumber / currentInput;
    } else {
        return "invalid operator";
    }
}

function handleEquals(){
    if(firstNumber !== null && operator !== null){
        result = operate(firstNumber, operator, currentInput);
        currentInput = String(result);
        firstNumber = null;
        operator = null;
        shouldResetDisplay = true;
    } else{
        return "error";
    }
}


const display = document.getElementById("display");
const numberBtns = document.querySelectorAll(".number")

numberBtns.forEach(button => {
    button.addEventListener("click", () =>{
        const value = button.textContent
        handleNumberInput(value);
        display.value = currentInput;
    })
})

const operatorBtns = document.querySelectorAll(".add, .subtract, .multiply, .divide");

operatorBtns.forEach(button => {
    button.addEventListener("click", () => {
        const op = button.textContent.trim();
        handleOperator(op);
        display.value = currentInput;
    });
});

const equalsBtn = document.querySelector(".result");

equalsBtn.addEventListener("click", () => {
    handleEquals();
    display.value = currentInput;
});

const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
    currentInput = "";
    firstNumber = null;
    operator = null;
    result = null;
    shouldResetDisplay = false;

    display.value = "";
});


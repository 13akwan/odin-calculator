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


handleNumberInput("1")
handleNumberInput("2")
handleOperator("+")
handleNumberInput("7")
handleOperator("-")
handleNumberInput("1")
handleEquals()
console.log(currentInput)


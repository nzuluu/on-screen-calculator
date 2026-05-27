const roundNum = function(input) {
    var rounder = Math.pow(100, 4)
    return (Math.round(input * rounder) / rounder);
}

const add = function(a,b) {
    let sum = Number(a) + Number(b);
	return roundNum(sum);
};

const subtract = function(a,b) {
    let sum = a - b;
	return roundNum(sum);
};

const multiply = function(a,b) {
    let sum = a * b;
    return roundNum(sum);
};

const divide = function(a,b)  {
    let sum = a/b;
    return roundNum(sum);
};

const sum = function(arr) {
	return arr.reduce((sum,current) => sum + current, 0);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  let answer = 1;
	if (a > 1) {
    for(let i = a; i >= 1; i--) {
     answer = answer * i;
    }
    return answer;
  }
  else if (a == 0 || a == 1) {
    return answer;
  }
  else {
    return "number has to be positive";
  }
};

const operate = function(a, operator, b) {
    switch(operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            alert('Enter a valid operator');
    }
};

createBtns();
function createBtns() {
    const container = document.querySelector("#container");
    const displayInput = document.createElement("div");
    displayInput.classList.add("display");
    displayInput.id = ("display");
    container.appendChild(displayInput);

    const btnContainer = document.createElement("div");
    
    btnContainer.classList.add("btnContainer");

    for (let i = 0; i <= 9; i++) {
        const btn = document.createElement("button");
        btn.classList.add("num");
        btn.value = (`${9-i}`);
        btn.textContent = `${9-i}`;
        btnContainer.appendChild(btn);
    }
    const decimal = document.createElement("button");
    decimal.classList.add("num");
    decimal.value = (".");
    decimal.textContent = ".";
    btnContainer.appendChild(decimal);

    const clearBtn = document.createElement("button");
    clearBtn.classList.add("num");
    clearBtn.value = ("clear");
    clearBtn.textContent = "Clear";
    btnContainer.appendChild(clearBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("num");
    deleteBtn.value = ("delete");
    deleteBtn.textContent = "Del";
    btnContainer.appendChild(deleteBtn);

    const operates = document.createElement("div");
    operates.classList.add("oppContainer");

    const divideBtn = document.createElement("button");
    divideBtn.classList.add("num");
    divideBtn.value = ("/");
    divideBtn.innerHTML = "&#247";

    const multipleBtn = document.createElement("button");
    multipleBtn.classList.add("num");
    multipleBtn.value = ("*");
    multipleBtn.innerHTML = "&#215";

    const minusBtn = document.createElement("button");
    minusBtn.classList.add("num");
    minusBtn.value = ("-");
    minusBtn.innerHTML = "&#8722";

    const plusBtn = document.createElement("button");
    plusBtn.classList.add("num");
    plusBtn.value = ("+");
    plusBtn.innerHTML = "&#43";

    const equalBtn = document.createElement("button");
    equalBtn.classList.add("num");
    equalBtn.value = ("=");
    equalBtn.innerHTML = "&#61";

    operates.appendChild(divideBtn);
    operates.appendChild(multipleBtn);
    operates.appendChild(minusBtn);
    operates.appendChild(plusBtn);
    operates.appendChild(equalBtn);

    container.appendChild(btnContainer);
    container.appendChild(operates);

}

let currentOperator = "";
let firstValue = "";
let secondValue = "";
let result = "";

document.querySelector("#container")
  .addEventListener("click", event => {
    let target = event.target;
    if (target.matches("button")) {
        let value = target.value;
        if(currentOperator.match(/["---","+","*","/"]/)) {
            switch(value) {
                case "+":
                    if (secondValue == '') {
                        result = firstValue;
                        currentOperator = value;
                    }
                    else {
                        result = operate(firstValue, currentOperator, secondValue);
                        firstValue = result;
                        secondValue = "";
                        currentOperator = value;
                    }
                    return document.querySelector("#display").textContent = result;
                case "-":
                    if (secondValue == '') {
                        result = firstValue;
                        currentOperator = value;
                    }
                    else {
                        result = operate(firstValue, currentOperator, secondValue);
                        firstValue = result;
                        secondValue = "";
                        currentOperator = value;
                    }
                    return document.querySelector("#display").textContent = result;
                case "*":
                    if (secondValue == '') {
                        result = firstValue;
                        currentOperator = value;
                    }
                    else {
                        result = operate(firstValue, currentOperator, secondValue);
                        firstValue = result;
                        secondValue = "";
                        currentOperator = value;
                    }
                    return document.querySelector("#display").textContent = result;
                case "/":
                    if (secondValue == '') {
                        result = firstValue;
                        currentOperator = value;
                    }
                    else {
                        result = operate(firstValue, currentOperator, secondValue);
                        firstValue = result;
                        secondValue = "";
                        currentOperator = value;
                    }
                    return document.querySelector("#display").textContent = result;
                case "=":
                    if ((secondValue == '') || (firstValue == '')) {
                        return;
                    }
                    else {
                        result = operate(firstValue, currentOperator, secondValue);
                        firstValue = "";
                        secondValue = "";
                        currentOperator = "";
                    }
                    return document.querySelector("#display").textContent = result;
                case "clear":
                    result = "";
                    currentOperator = "";
                    firstValue = "";
                    secondValue = "";
                    return document.querySelector("#display").textContent = "";
                case "delete":
                    return document.querySelector("#display").textContent = secondValue.length - 1;
                default:
                    secondValue += value;
                    return document.querySelector("#display").textContent = secondValue;
                }
        }
        
        else {
        switch(value) {
            case "+":
                if (firstValue == ''){
                    firstValue = result;
                }
                currentOperator = value;
                return value = 0;
            case "-":
                if (firstValue == ''){
                    firstValue = result;
                }
                currentOperator = value;
                return value = 0;
            case "*":
                if (firstValue == ''){
                    firstValue = result;
                }
                currentOperator = value;
                return value = 0;
            case "/":
                if (firstValue == ''){
                    firstValue = result;
                }
                currentOperator = value;
                return value = 0;
            case "=":
                return value = 0;
            case "clear":
                currentOperator = "";
                firstValue = "";
                secondValue = "";
                return document.querySelector("#display").textContent = "";
            case "delete":
                return document.querySelector("#display").textContent = firstValue.length - 1;          
            default:
                firstValue += value;
                return document.querySelector("#display").textContent = firstValue;
            }
        }
    }
  });


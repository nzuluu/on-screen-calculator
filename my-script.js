const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const multiply = function(a,b) {
    return a * b;
};

const divide = function(a,b)  {
    return a/b;
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

function createBtns() {
    const container = document.querySelector("#container");
    const userInput = "1 + 5";
    const displayInput = document.createElement("div");
    displayInput.classList.add("display");
    displayInput.innerHTML = userInput;
    container.appendChild(displayInput);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btnContainer");

    for (let i = 0; i <= 9; i++) {
        const btn = document.createElement("button");
        btn.classList.add("num");
        btn.textContent = `${9-i}`;
        btnContainer.appendChild(btn);
    }
    const decimal = document.createElement("button");
    decimal.classList.add("decimal");
    decimal.textContent = ".";
    btnContainer.appendChild(decimal);

    const clearBtn = document.createElement("button");
    clearBtn.classList.add("clear");
    clearBtn.textContent = "Clear";
    btnContainer.appendChild(clearBtn);

    const operates = document.createElement("div");
    operates.classList.add("oppContainer");

    const divideBtn = document.createElement("button");
    divideBtn.classList.add("divide");
    divideBtn.innerHTML = "&#247";

    const multipleBtn = document.createElement("button");
    multipleBtn.classList.add("multiple");
    multipleBtn.innerHTML = "&#215";

    const minusBtn = document.createElement("button");
    minusBtn.classList.add("minus");
    minusBtn.innerHTML = "&#8722";

    const plusBtn = document.createElement("button");
    plusBtn.classList.add("plus");
    plusBtn.innerHTML = "&#43";

    const equalBtn = document.createElement("button");
    equalBtn.classList.add("equal");
    equalBtn.innerHTML = "&#61;";

    operates.appendChild(divideBtn);
    operates.appendChild(multipleBtn);
    operates.appendChild(minusBtn);
    operates.appendChild(plusBtn);
    operates.appendChild(equalBtn);


    container.appendChild(btnContainer);
    container.appendChild(operates);
}

createBtns();
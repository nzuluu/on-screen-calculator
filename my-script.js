const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const multiply = function(a,b) {
    return a * b;
};
// const multiply = function(arr) {
// 	return arr.reduce((sum,current) => sum * current);
// };

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
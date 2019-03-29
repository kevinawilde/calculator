const calculator = {
	firstNumber: 0,
	secondNumber:0,
	waiting: false,
	operator: null,

};
var result;
var number = function(elem, calculate) {
	if(calculate.waiting == false){
		calculate.firstNumber= calculate.firstNumber + '' + elem;
		calculate.firstNumber= parseInt(calculate.firstNumber, 10);
	} else if(calculate.waiting == true) {
		calculate.secondNumber= calculate.secondNumber + '' + elem;
		calculate.secondNumber= parseInt(calculate.secondNumber, 10);
	}
	return calculate;
};
var operator = function(operation, calculate){
	calculate.waiting = true;
	calculate.operator = operation;
	return calculate;
};
var calculation= function(calculate){
	if (calculate.operator == '+'){
		result = (calculate.firstNumber + calculate.secondNumber);
		return result;
	}
	if (calculate.operator == '-'){
		result = (calculate.firstNumber - calculate.secondNumber);
		return result;
	}
	if (calculate.operator == '*'){
		result = (calculate.firstNumber * calculate.secondNumber);
		return result;
	}
	if (calculate.operator == '/'){
		result = (calculate.firstNumber / calculate.secondNumber);
		return result;
	}
}
var clear = function(calculate){
	calculate.firstNumber = 0;
	calculate.secondNumber = 0;
	calculate.waiting = false;
	calculate.operator = null;
	return calculate;
}
number(21, calculator);
operator('/', calculator);
number(3 ,calculator);
calculation(calculator);
console.log(result);
clear(calculator);
console.log(calculator);
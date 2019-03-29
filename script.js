const calculator = {
	firstNumber: 0,
	secondNumber:0,
	waiting: false,
	operator: null,

};
var result;
var display = function(numbers) {
    var display = document.getElementById('display');

    display.textContent = numbers;
}
var clearDisplay = function(){
	var display = document.getElementById('display');

    display.textContent = "0";
}
var number = function(elem, calculate) {
	if(calculate.waiting == false){
		calculate.firstNumber= calculate.firstNumber + '' + elem;
		calculate.firstNumber= parseInt(calculate.firstNumber, 10);
		display(calculate.firstNumber);
	} else if(calculate.waiting == true) {
		calculate.secondNumber= calculate.secondNumber + '' + elem;
		calculate.secondNumber= parseInt(calculate.secondNumber, 10);
		display(calculate.secondNumber);
	}
	return calculate;
};
var operator = function(operation, calculate){
	calculate.waiting = true;
	calculate.operator = operation;
	clearDisplay();
	return calculate;
};
var calculation= function(calculate){
	if (calculate.operator == '+'){
		result = (calculate.firstNumber + calculate.secondNumber);
		display(result);
		return result;
	}
	if (calculate.operator == '-'){
		result = (calculate.firstNumber - calculate.secondNumber);
		display(result);
		return result;
	}
	if (calculate.operator == '*'){
		result = (calculate.firstNumber * calculate.secondNumber);
		display(result);
		return result;
	}
	if (calculate.operator == '/'){
		result = (calculate.firstNumber / calculate.secondNumber);
		display(result);
		return result;
	}
}
var clearCalculator = function(calculate){
	clearDisplay();
	calculate.firstNumber = 0;
	calculate.secondNumber = 0;
	calculate.waiting = false;
	calculate.operator = null;
	
	return calculate;
}
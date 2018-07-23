var square = function(x){
	return x * x ;
};
console.log(square(12));		

/**/

var makeNoise = function(){
	console.log("Pling!");
};
makeNoise();

/**/

var power = function(base, exponent){
	var result = 1;
	for (var count = 0; count < exponent; count++)
	result *= base;
	return result;
};
console.log(power(2, 10))

/**/

var x = "outside";
var f1 = function(){
	var x = "inside f1";
};
f1();
console.log(x);

/**/

var f2 = function(){
	x = "inside f2";
};
f2();
console.log(x)

/**/

var landscape = function(){
	var result = "";
	var flat = function(size){
		for (var count = 0 ; count < size ; count++)
			result += "_";
	};
	var mountain = function(size){
		result += "/"; 
		for (var count = 0; count < size; count++)
			result += "'";
		result += "\\";
	};
	flat(3);
	mountain(4);
	flat(6);
	mountain(1);
	flat(3);
	mountain(4);
	flat(6);
	mountain(4);
	flat(6);
	mountain(1);
	flat(3);
	return result;
};
console.log(landscape())

/*Notação Por Declaração*/

function square(x){
	return x * x;
}

console.log("The future says: ", future());

function future(){
	return "We still have no flying cars.";
}

/*A Pilha de Chamadas*/

/*function greet(who){
	console.log("Hello " + who);
}
greet("Harry");
console.log("Bye")

function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");*/

/*Argumentos Opcionais*/

function power(base, exponent){
	if (exponent == undefined)
		exponent = 2;
	var result = 1;
	for (var count = 0; count < exponent; count++)
		result *= base;
	return result;
}
console.log(power(4));
console.log(power(4, 3));

/*Closure*/

function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplie(factor){
	return function(number){
		return number * factor;
	};
}
var twice = multiplie(2);
console.log(twice(5));
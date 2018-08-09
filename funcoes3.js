/*Closure*/

function wrapValue(n) {
	var localVariable = n;
	return function() { return localVariable; };
}
var warp1 = wrapValue(1);
var warp2 = wrapValue(2);
console.log(warp1());
console.log(warp2());


var carros = ['Ka', 'Corsa', 'Palio'];

var pos = carros.indexOf("Corsa");
carros.splice(0, 2, 'Sonic', 'Uno');
carros.toString();

console.log(carros);


carros.forEach(function(element){
	console.log(element);
});

function multiplier(factor) {
	return function(number) {
		return number * factor;
	};
}
var twice = multiplier(2);
console.log(twice(5));
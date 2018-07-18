var main = function(){
	console.log("testando...");
	var somar = function(n1, n2){
		return n1 + n2;
	}
	var subtrair = function(n1, n2){
		return n1 - n2;
	}
	var multiplicar = function(n1, n2){
		return n1 * n2;
	}
	var dividir = function(n1, n2){
		if (n2 > 0){
			return n1 / n2;
		}else{
			return undefined;
		}
	}
	var resultadoSoma = somar(3, 8);
	console.log("soma: ", resultadoSoma);

	var resultadoSubtracao = subtrair(3, 8);
	console.log("subtracao: ", resultadoSubtracao);

	var resultadoMultiplicacao = multiplicar(3, 8);
	console.log("multiplicacao: ", resultadoMultiplicacao);

	var resultadoDivisao = dividir(3, 8);
	console.log("divisao: ", resultadoDivisao);
};
window.addEventListener('load', main);
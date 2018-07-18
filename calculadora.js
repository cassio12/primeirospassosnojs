window.addEventListener('load', function(){
	console.log("Testando...");

	var display = document.querySelector("#display");
	display.value = "";

	var botao0 = document.querySelector("#_0");
	botao0.addEventListener("click", function(){
		display.value = display.value + botao0.innerHTML;
	});
	
	var botao1 = document.querySelector("#_1");
	botao1.addEventListener("click", function(){
		display.value = display.value + botao1.innerHTML;
	});
	
	var botao2 = document.querySelector("#_2");
	botao2.addEventListener("click", function(){
		display.value = display.value + botao2.innerHTML;
	});
	
	var botao3 = document.querySelector("#_3");
	botao3.addEventListener("click", function(){
		display.value = display.value + botao3.innerHTML;
	});
	
	var botao4 = document.querySelector("#_4");
	botao4.addEventListener("click", function(){
		display.value = display.value + botao4.innerHTML;
	});
	var botao5 = document.querySelector("#_5");
	botao5.addEventListener("click", function(){
		display.value = display.value + botao5.innerHTML;
	});
	var botao6 = document.querySelector("#_6");
	botao6.addEventListener("click", function(){
		display.value = display.value + botao6.innerHTML;
	});
	var botao7 = document.querySelector("#_7");
	botao7.addEventListener("click", function(){
		display.value = display.value + botao7.innerHTML;
	});
	var botao8 = document.querySelector("#_8");
	botao8.addEventListener("click", function(){
		display.value = display.value + botao8.innerHTML;
	});
	var botao9 = document.querySelector("#_9");
	botao9.addEventListener("click", function(){
		display.value = display.value + botao9.innerHTML;
	});
	var botaoigual = document.querySelector("#_igual");
	botaoigual.addEventListener("click", function(){
			
		var textoDoDisplay = display.value;

		var regexSoma = /\d+\+\d+/;

		if(regexSoma.test(textoDoDisplay)){

			var operandos = textoDoDisplay.split("+");
			var n1 = parseFloat(operandos[0]);
			var n2 = parseFloat(operandos[1]);
			var soma = n1 + n2;
			display.value = soma;
		}

		var regexSubtracao = /\d+\-\d+/;

		if(regexSubtracao.test(textoDoDisplay)){

			var operandos = textoDoDisplay.split("-");
			var n1 = parseFloat(operandos[0]);
			var n2 = parseFloat(operandos[1]);
			var subtracao = n1 - n2;
			display.value = subtracao;
		}

		var regexMultiplicacao = /\d+\*\d+/;

		if(regexMultiplicacao.test(textoDoDisplay)){

			var operandos = textoDoDisplay.split("*");
			var n1 = parseFloat(operandos[0]);
			var n2 = parseFloat(operandos[1]);
			var multiplicacao = n1 * n2;
			display.value = multiplicacao;
		}
		var regexDivisao = /\d+\/\d+/;

		if(regexDivisao.test(textoDoDisplay)){

			var operandos = textoDoDisplay.split("/");
			var n1 = parseFloat(operandos[0]);
			var n2 = parseFloat(operandos[1]);
			var divisao = n1 / n2;
			display.value = divisao;
		}

		console.log(textoDoDisplay)
	});
	var botaoapagar = document.querySelector("#_apagar");
	botaoapagar.addEventListener("click", function(){
		display.value = display.value.substr(0,(display.value.length - 1 ));
	});
	var botaosoma = document.querySelector("#_soma");
	botaosoma.addEventListener("click", function(){
		display.value = display.value + botaosoma.innerHTML;
	});
	var botaosubtrair = document.querySelector("#_subtrair");
	botaosubtrair.addEventListener("click", function(){
		display.value = display.value + botaosubtrair.innerHTML;
	});
	var botaomultiplicar = document.querySelector("#_multiplicar");
	botaomultiplicar.addEventListener("click", function(){
		display.value = display.value + botaomultiplicar.innerHTML;
	});
	var botaodividir = document.querySelector("#_dividir");
	botaodividir.addEventListener("click", function(){
		display.value = display.value + botaodividir.innerHTML;
	});
	var botaodeletar = document.querySelector("#_del");
	botaodeletar.addEventListener("click", function(){
		display.value = display.value.substr(0,(display.value.length - 999999999999999999999 ));
	});
	var botaoponto = document.querySelector("#_ponto");
	botaoponto.addEventListener("click", function(){
		display.value = display.value + botaoponto.innerHTML;
	});
});
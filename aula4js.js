window.addEventListener('load', calculadora);

function calculadora(){
	console.log('testando')
	var display = document.querySelector("#display");
	display.value = '';

	var botao7 = document.querySelector('#_7');
	botao7.addEventListener('click', function(){
		display.value = display.value + botao7.value;
	})

	var botao8 = document.querySelector('#_8');
	botao8.addEventListener('click', function(){
		display.value = display.value + botao8.value;
	})
	
	var botao9 = document.querySelector('#_9');
	botao9.addEventListener('click', function(){
		display.value = display.value + botao9.value;
	})
	
	var botaoDivisao = document.querySelector('#_divisao');
	botaoDivisao.addEventListener('click', function(){
		display.value = display.value + botaoDivisao.value;
	})
	
	var botao4 = document.querySelector('#_4');
	botao4.addEventListener('click', function(){
		display.value = display.value + botao4.value;
	})
	
	var botao5 = document.querySelector('#_5');
	botao5.addEventListener('click', function(){
		display.value = display.value + botao5.value;
	})
	
	var botao6 = document.querySelector('#_6');
	botao6.addEventListener('click', function(){
		display.value = display.value + botao6.value;
	})
	
	var botaoMultiplicacao = document.querySelector('#_multiplicacao');
	botaoMultiplicacao.addEventListener('click', function(){
		display.value = display.value + botaoMultiplicacao.value;
	})
	
	var botao1 = document.querySelector('#_1');
	botao1.addEventListener('click', function(){
		display.value = display.value + botao1.value;
	})
	
	var botao2 = document.querySelector('#_2');
	botao2.addEventListener('click', function(){
		display.value = display.value + botao2.value;
	})
	
	var botao3 = document.querySelector('#_3');
	botao3.addEventListener('click', function(){
		display.value = display.value + botao3.value;
	})
	
	var botaoSubtracao = document.querySelector('#_subtracao');
	botaoSubtracao.addEventListener('click', function(){
		display.value = display.value + botaoSubtracao.value;
	})
	
	var botao0 = document.querySelector('#_0');
	botao0.addEventListener('click', function(){
		display.value = display.value + botao0.value;
	})
	
	var botaoApagar = document.querySelector("#_apagar");
	botaoApagar.addEventListener("click", function(){
		display.value = display.value.substr(0,(display.value.length - 1 ));
	});
	
	var botaoAdicao = document.querySelector("#_adicao");
	botaoAdicao.addEventListener("click", function(){
		display.value = display.value + botaoAdicao.value;
	});

	var botaodeletar = document.querySelector("#_del");
	botaodeletar.addEventListener("click", function(){
		display.value = display.value.substr(0,(display.value.length - 99999999999999999999999999999 ));
	});
	var botaoPonto = document.querySelector("#_ponto");
	botaoPonto.addEventListener("click", function(){
		display.value = display.value + botaoPonto.value;
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
}
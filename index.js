window.addEventListener('load', function(){
	var objetoBotaoSomar = document.querySelector('#somar');
	var objetoBotaoSubitrair = document.querySelector('#subitrair');
	var objetoBotaoMultiplicar = document.querySelector('#multiplicar');
	var objetoBotaoDividir = document.querySelector('#dividir');

	objetoBotaoSomar.disabled = true;
	objetoBotaoSubitrair.disabled = true;
	objetoBotaoMultiplicar.disabled = true;
	objetoBotaoDividir.disabled = true;


	var objetoInputN1 = document.querySelector('#n1');
	var objetoInputN2 = document.querySelector('#n2');
	

	objetoInputN1.addEventListener('input', function(e){
		if(e.target.value == '' || 
			objetoInputN2.value == '' || 
			isNaN(e.target.value) ||
			isNaN(objetoInputN2.value)){


			objetoBotaoSomar.disabled = true;
			objetoBotaoSubitrair.disabled = true;
			objetoBotaoMultiplicar.disabled = true;
			objetoBotaoDividir.disabled = true;
		}else{
			objetoBotaoSomar.disabled = false;
			objetoBotaoSubitrair.disabled = false;
			objetoBotaoMultiplicar.disabled = false;
			objetoBotaoDividir.disabled = false;
		}
		
	});
	objetoInputN2.addEventListener('input', function(e){
		if(e.target.value == '' || 
			objetoInputN1.value == ''||
			isNaN(e.target.value) ||
			isNaN(objetoInputN2.value)){

			objetoBotaoSomar.disabled = true;
			objetoBotaoSubitrair.disabled = true;
			objetoBotaoMultiplicar.disabled = true;
			objetoBotaoDividir.disabled = true;
		}else{
			objetoBotaoSomar.disabled = false;
			objetoBotaoSubitrair.disabled = false;
			objetoBotaoMultiplicar.disabled = false;
			objetoBotaoDividir.disabled = false;
			
			if(e.target.value == 0){
				objetoBotaoDividir.disabled = true;	
			}
		}
	});

	objetoBotaoSomar.addEventListener('click', function(){
		console.log("vc clicou no botão somar")
		var n1 = document.querySelector('#n1').value;
		var n2 = document.querySelector('#n2').value;
		

		var n1 = parseFloat(n1);
		var n2 = parseFloat(n2);

		var soma = n1 + n2;

		var resultado = document.querySelector('#resultado-soma');

		resultado.innerHTML = soma;
		
	})
	objetoBotaoSubitrair.addEventListener('click', function(){
		console.log("vc clicou no botão subitrair")
		var n1 = document.querySelector('#n1').value;
		var n2 = document.querySelector('#n2').value;
		

		var n1 = parseFloat(n1);
		var n2 = parseFloat(n2);

		var subitrair = n1 - n2;

		var resultado = document.querySelector('#resultado-subitracao');

		resultado.innerHTML = subitrair;
		
	})
	objetoBotaoMultiplicar.addEventListener('click', function(){
		console.log("vc clicou no botão multiplicar")
		var n1 = document.querySelector('#n1').value;
		var n2 = document.querySelector('#n2').value;
		

		var n1 = parseFloat(n1);
		var n2 = parseFloat(n2);

		var multiplicar = n1 * n2;

		var resultado = document.querySelector('#resultado-multiplicacao');

		resultado.innerHTML = multiplicar;
		
	})
	objetoBotaoDividir.addEventListener('click', function(){
		console.log("vc clicou no botão dividir")
		var n1 = document.querySelector('#n1').value;
		var n2 = document.querySelector('#n2').value;
		

		var n1 = parseFloat(n1);
		var n2 = parseFloat(n2);

		var dividir = n1 / n2;

		var resultado = document.querySelector('#resultado-divisao');

		resultado.innerHTML = dividir;
		
	})
})
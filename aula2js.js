var main = function(){
	


	// Criar objeto vazio e criar dinamocamente os atributos
	var carro1 = {};
	carro1.cor = "branco";
	carro1.modelo = "gol";
	carro1.marca = "wolksvagem";
	carro1.ano = 2005;
	carro1.qntPortas = 4;
	



	// Ceiar objeto por função fábrica
	var criarCarro = function(cor, modelo, marca, ano, qntPortas){
		return {
			cor:cor,
			modelo:modelo,
			marca:marca,
			ano:ano,
			qntPortas:qntPortas
		};
	};

	// Criar objeto por função construtora
	var carro = function(cor, modelo, marca, ano, qntPortas){
		this.cor = cor;
		this.modelo = modelo;
		this.marca = marca;
		this.ano = ano;
		this.qntPortas = qntPortas;
	}
	var carro4 = new carro("vermelho", "Uno", "fiat", 2006, 4);

	console.log(carro1)
	console.log()
	console.log(carro4);
};
window.addEventListener('load', main);
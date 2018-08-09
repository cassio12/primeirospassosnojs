window.addEventListener('load', manipulancaoDeStrings);

function manipulancaoDeStrings(){
	console.log("testando...");

	var elementoComFrase = document.querySelector('#frase');
	var frase = elementoComFrase.innerHTML;

	var elementoComFrase = document.querySelector('#resposta');
	var resposta = elementoComFrase.innerHTML;

	var fraseEResposta = frase.concat(" " + resposta, );
	console.log('fraseEResposta', fraseEResposta);

	console.log('Frase: ', frase);
	console.log('Tipo de dado: ', typeof string);
	console.log('Tamanhoa da string: ', frase.length);
	console.log('Tamanho da resposta: ', resposta.length)
	console.log('frase[0]: ', frase[0]);
	console.log('frase[5]: ', frase[5]);
	console.log('frase[frase.length - 1]: ', frase[frase.length - 1]);
	
	var __substring = frase.slice(9);
	console.log('__substring:', __substring);
	var indice = frase.indexOf('JS');
	console.log("indexOf: ", indice);
	__substring = frase.replace('JS', 'python');
	console.log(__substring); 
}
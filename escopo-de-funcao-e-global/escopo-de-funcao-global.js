var nome = 'BuildSoftware'; //Variavel Global

var capitalizar = function(){
	//Variavel local da função capitalizar
	var nome = 'BuildSoftware'.toUpperCase();
}
capitalizar();
console.log('Variavel Global:', nome);

var capitalizar2 = function(){
	//Acessando a variavel Global dentro da função capitalizar2
	nome = 'BuildSoftware'.toUpperCase();
}

capitalizar2();
console.log('Variavel Global:', nome);
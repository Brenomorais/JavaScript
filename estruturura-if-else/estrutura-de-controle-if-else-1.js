var pessoa = 'JURIDICA';

if(pessoa === 'FISICA'){
	//define mascara de CPF: 000.000.000-00
	console.log('Selecione pessoa Física');
}else if(pessoa === 'JURIDICA'){
	//define mascara de CNPJ: 00.000.000/0000-00
	console.log('Selecionado pessoa juridica');
}else{
	console.log('Tipo pessoa inválido');
}
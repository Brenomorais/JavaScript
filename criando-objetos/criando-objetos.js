var fox = { cor: 'Prata', modelo: 'Fox', fabricante: 'VW'}

console.log('Fox: ',fox);
console.log(typeof fox);

console.log('Cor do fox: ', fox.cor);

//Alterando a cor do fox
fox.cor = 'Branco';
console.log('Cor do fox alterada: ', fox.cor);
console.log('Modelo: ',fox['modelo']);

fox.peso = 1100;
console.log(fox);


fox.ligar = function(){
	console.log('ligando o carro');
}
console.log(fox);
fox.ligar();

var celta = {
	cor: 'branco',
	modelo: 'celta',
	fabricante: 'GM',
	ligar: function(){
		console.log('Ligando o carro');
	}
};

console.log(celta);
celta.ligar();
function Carro(nome, placa){
	this.nome = nome;
	this.placa = placa;
	//this.fabricante = 'VW';
}

Carro.prototype.fabricante = 'VW';

var fox = new Carro('Fox','AAA-1122');
console.log('fox', fox);

var gol = new Carro('Gol', 'AAA-1133');
console.log('gol',gol);

console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));

console.log('Fox', fox.fabricante);
console.log('Gol', gol.fabricante);
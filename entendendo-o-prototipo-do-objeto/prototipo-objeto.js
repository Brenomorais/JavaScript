var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-11111'	
}

var gol = Object.create(volks);
gol.nome = 'Gol';
gol.placa = 'AAA-2222';

console.log(fox);
console.log(gol);

console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));

console.log(fox.fabricante);
console.log(gol.fabricante);

Object.setPrototypeOf(fox, volks);
console.log('> ',fox.fabricante);

console.log('> ',gol.fabricante);
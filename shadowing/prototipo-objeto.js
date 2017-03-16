var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-11111',
	fabricante: 'GM'
}


console.log('fox.fabricante', fox.fabricante);
Object.setPrototypeOf(fox, volks);

delete fox.fabricante;
console.log('fox.fabricante', fox.fabricante);

for(prorpriedade in fox){
	console.log(prorpriedade, fox.hasOwnProperty(prorpriedade));
}
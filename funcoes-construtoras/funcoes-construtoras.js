var Carro = function(nome,placa){
	this.nome = nome;
	this.placa = placa;
	this.fabricante = 'VW';
}

var fox = new Carro('Fox','AAA-1234');
console.log(fox);

var gol = new Carro('Gol', 'BBB-9765');
console.log(gol);
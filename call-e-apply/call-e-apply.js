function Carro(nome, placa){
	this.nome = nome;
	this.placa = placa;
}
var fox = new Carro('Fox', 'AAA-1111');
console.log(fox);

//Usando o call para chamar a função
var gol = {}
Carro.call(gol, 'Gol', 'OPT-6767');

console.log(gol);


//Usando o apply para chamar a função
var up = {}
Carro.apply(up, ['Up', 'GMI-5656']);

console.log(up);

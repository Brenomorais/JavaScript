var acessorio = {som: 'Pionner', banco: 'Couro'};

var ligar = function(a){
	console.log('Ligando o carro...', a);
}
var fox = [ 'Fox',  4, acessorio, ligar];

console.log(fox);

console.log(fox[2].som);

//Executando a função
fox[3]('agora!');
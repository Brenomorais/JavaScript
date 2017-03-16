var criarCarro = function(nome,placa){
	return {
		nome: nome,
		placa: placa,
		fabricante: 'VW'
	};
}

var fox = criarCarro('Fox','AAA-1111');
console.log(fox);

var golf = criarCarro('Golf', 'blm-9090');
console.log(golf);
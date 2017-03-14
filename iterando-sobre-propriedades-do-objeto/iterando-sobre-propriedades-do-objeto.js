var joao = {
	nome: 'João',
	idade:'25',
	endereco: {
		logradouro: 'Av Brasil',
		numero: '100',
		complemento: 'Apto 30',
		cidade: 'São Paulo',
		estado: 'SP'
	}
}

for(var prop in joao){
	console.log(prop, '->', joao[prop]);
}
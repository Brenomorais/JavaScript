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

console.log(joao);
delete joao.idade;
console.log('>>', joao);
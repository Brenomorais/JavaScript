var joao = {
	nome: 'João',
	idade: 25,
	email: 'joao@teste.com',
	igualA: function(obj){
		return this.email === obj.email;
	}
}

var maria = {
	nome: 'Maria',
	idade: 27,
	email: 'maria@teste.com'
}

console.log(joao === maria);

console.log('João e Maria tem os mesmos e-mails ?', joao.igualA(maria));
/* Contador sem  segurando que pode ser sabotado

var contador = {
	valor: 0,
	incrementar: function(){
		this.valor++;
	},
	reset: function(){
		console.log('Valor do contador agora', this.valor);
		this.valor = 0;
	}
}

//contador.valor = 'Sabotei' // valor foi sabotado

contador.incrementar();
contador.incrementar();

contador.reset();

contador.incrementar();

contador.reset();
*/
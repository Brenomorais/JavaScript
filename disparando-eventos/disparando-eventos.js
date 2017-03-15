$(function() {
	
	var atividade = $('#atividade');
	var listaAtividades = $('#lista-atividades');

	atividade.on('keyup', function(e) {
		var keyCode = e.keyCode;

		if(keyCode === 13){
			//Disparar o evento
			adicionarNaLista();
		}
	});

	function adicionarNaLista (texto) {
		listaAtividades.prepend('<li>'+atividade.val()+'</li>');
			atividade.val('');
	}

});
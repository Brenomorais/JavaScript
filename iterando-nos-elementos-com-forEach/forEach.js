var nomes = ['João','Pedro','Maria','Jose'];

// com o laço For
for(var i = 0; i < nomes.length; i++){
	console.log('Nomes: ', nomes[i]);
}

console.log('\n');

//com o forEach
nomes.forEach(function(elementos){
	console.log('Nomes: ', elementos);
});
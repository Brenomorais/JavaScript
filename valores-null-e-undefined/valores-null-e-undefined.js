// quando uma variavel e iniciada sem nenhum valor ele fica com undefined
var x = null;
console.log(x);

if(x != null){
	console.log('Existe um valor em x:', x);
}else{
	console.log('X não tem um valor util');
}
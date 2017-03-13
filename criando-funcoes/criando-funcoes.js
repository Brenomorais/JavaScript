//Função no javascript não é necessario ter return, se não colocar return será undefined

//function declaration
function somar(a, b){
	console.log('arguments', arguments);
	return  a + b;
}

//function expression
var subtrair = function(a,b){
	return a - b;
}

var soma = somar(2,2);
console.log("Soma: ",soma);

var subtraido = subtrair(10,2);
console.log('Subtrair:', subtraido);

//Java
//int somar(int a, int b)
//	return a + b;
//}
var percentualImposto = 0.15;
var totalImposto =  valor * percentualImposto;

console.log('Total imposto a pagar', totalImposto);

var valor = 100;

// HOISTING
/*
>> Mode de execução  ao ser executado o script

var percentualImposto, totalImposto, valor;
percentualImposto = 0.15;
totalImposto = valor * percentualImposto;
console.log('Total imposto a pagar', totalImposto);
valor = 100;
*/
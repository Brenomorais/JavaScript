var emails = [];

console.log(emails.length);

//adicionando elementos no array no fim do array
emails.push('joao@emails.com');
console.log(emails.length);

emails.push('maria@emails.com');
console.log(emails.length);

emails.push('jose@emails.com');
console.log(emails.length);

//removendo elementos do array Pop remove o ultimo elemento do array e retorna o valor da posição apagada
emails.pop();
console.log(emails.length);

//adiciona no inicio do array
emails.unshift('pedro@gmail.com');
console.log(emails.length);

//remove no inicio do array
emails.shift();
console.log(emails.length);
/* No array os valores são acessado atraves das posições que são os indices
*  No Objeto os valores são acessado atraves das propriedades declaradas no objeto
*/


ar foxArray = ['Fox','Prata','VW'];
console.log(typeof foxArray);

console.log(foxArray[0]);

var foxObj = {modelo: 'Fox', cor: 'Prata', fabricante: 'VW'}
console.log(typeof foxObj);

console.log(foxObj.cor);
console.log(foxObj.modelo);
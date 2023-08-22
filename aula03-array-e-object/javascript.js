//--------------------------OQUE SAO VETORES OU ARRAYS-------------------------------

//como declarar um array

/*let array = ['string', 1, true];
console.log(array);*/

//pode guardar varios tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array);

//forEach
/*array.forEach(function(item, index){console.log(item, index)});*/

//-----------------------------MANIPULANDO ARRAYS-----------------------------------

//push
/*array.push('novo item');
console.log(array);*/

//pop
/*array.pop();
console.log(array);*/

//shift - tira um item do inicio do array
/*array.shift();
console.log(array);*/

//unshift - adiciona um item no inicio do array
/*array.unshift('novo-item-no-inicio');
console.log(array);*/

//console.log(array.indexOf(true));

//SPLICE remove ou substitui um item pelo indice
/*array.splice(0,3);
console.log(array);*/

//slice retorna uma parte de um array ja existente
let novoArray = array.slice(0,3);
console.log(novoArray);

//----------------------OBJETOS-------------------------------------------------
let object = {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: { objectInterno: 'objeto interno'}};

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayObjeto = object.array;
console.log(arrayObjeto);

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
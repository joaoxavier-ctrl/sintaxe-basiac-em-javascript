//tipos primitivos

//boolean

var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'diana';
console.log(typeof(nome));

//function
var funcao = function(){}
console.log(typeof(funcao));

//variaveis, como declarar
var variavel = 'diana';
console.log(variavel);

let variavel2 = 'joao';
console.log(variavel2);

const constante = '1'; //variavel const nao pode ser mudada
console.log(constante);

var escopoGlobal = 'Global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//atribuicao
var atribuicao = 'joao';

//comparacao
var comparacao = '0' == 0;
console.log(comparacao);

//comparacao identica
var comparacaoIdentica = '0' == 0;
console.log(comparacaoIdentica);

//adicao
var adicao = 1+1;
console.log(adicao);

//subtracao
var subtracao = 2-1;
console.log(subtracao);

//multiplicacao
var multiplicacao = 2*3;
console.log(multiplicacao);

//divisao real
var divisaoReal = 6/2;
console.log(divisaoReal);

//divisao inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//potenciação
var potenciacao = 2**10;
console.log(potenciacao)

//OPERADORES RELACIONAIS 

//maior que >
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que <
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual a >=
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igual a <=
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

//OPERADORES LOGICOS

//E &&
var e = true && false;
console.log(e);

//OU ||
var ou = true || false;
console.log(ou);

//NAO !
var nao = !true;
console.log(nao);



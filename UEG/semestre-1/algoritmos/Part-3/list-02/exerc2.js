/*
2. Fazer um programa que calcule e imprima o valor do produtório ( Π )
de todos os números inteiros positivos de 1 a n, onde n e fornecido
pelo usuário.
*/

function somarWhile(numero){
    let valor = 1;
    let multiplicacao = 1;
    
    while(valor <= numero) {
    multiplicacao *= valor;
    valor++       
    }
    return multiplicacao;
}

function somarDoWhile(numero){
    let valor = 1;
    let multiplicacao = 1;

    do{
        multiplicacao *= valor;
        valor++;  
    }while(valor <= numero) {
 
}
    return multiplicacao;
}

function somarFor(numero){
    let multiplicacao = 1;

    for(valor = 1; valor <= numero; valor++) {
    multiplicacao *= valor;      
} 
    return multiplicacao;
}

const prompt = require("prompt-sync")();

let numero = Number(prompt(`Digite um número inteiro positivo: `));

console.log(`${somarDoWhile(numero)}`);
console.log(`${somarWhile(numero)}`);
console.log(`${somarFor(numero)}`);

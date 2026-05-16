/*
1. Fazer um programa que calcule e imprima o valor do somatório ( Σ )
de todos os números inteiros positivos de 1 a n, onde n e fornecido
pelo usuário.
*/
function somarWhile(numero){
    let soma = 0;
    let valor = 1;
    
    while(valor <= numero) {
        soma += valor; 
        valor++;       
    }
    return soma;
}

function somarDoWhile(numero){
    let soma = 0;
    let valor = 1;

    do{ 
    soma += valor; 
    valor++;
    }while(valor <= numero);
    return soma;
}

function somarFor(numero){
   let soma = 0;

    for(valor = 1; valor <= numero; valor++) {
    soma += valor;       
} 
    return soma;
}

const prompt = require("prompt-sync")();

let numero = Number(prompt(`Digite um número inteiro positivo: `));

console.log(`O somatório de 1 até ${numero} é: ${somarDoWhile(numero)}`);
console.log(`O somatório de 1 até ${numero} é: ${somarWhile(numero)}`);
console.log(`O somatório de 1 até ${numero} é: ${somarFor(numero)}`);
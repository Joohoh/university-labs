/*
3. Fazer um programa que leia um número inteiro n qualquer fornecido
pelo usuário e imprima a tabuada de multiplicação de n.
*/

function somarWhile(numero){
    let valor = 0;
    let multiplicacao = numero;
    
    while(valor <= 10) {
    multiplicacao = numero * valor;
    console.log(`Multiplicação de ${valor} * ${numero} = ${multiplicacao}`);
    valor++;     
    }
}

function somarDoWhile(numero){
    let valor = 0;
    let multiplicacao = numero;

    do{
        multiplicacao = numero * valor;
        console.log(`Multiplicação de ${valor} * ${numero} = ${multiplicacao}`);
        valor++;
    }while(valor <= 10)
}

function somarFor(numero){
    let multiplicacao = numero;
    
    for(valor = 0; valor <= 10; valor++) {
    multiplicacao = numero * valor;
    console.log(`Multiplicação de ${valor} * ${numero} = ${multiplicacao}`);   
    } 
}

const prompt = require("prompt-sync")();

let numero = Number(prompt(`Digite um número inteiro positivo: `));

somarDoWhile(numero);
somarWhile(numero);
somarFor(numero);

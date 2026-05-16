/* 1. Fazer um programa que leia um número inteiro positivo, calcule e
escreva todos os divisores deste. */

const prompt = require("prompt-sync")();

// PROCESSAMENTO
function calcularValor(numero){
    let valor = 1
    for(valor = 1; valor <= numero; valor++){
        if(numero % valor === 0)
        console.log(`${valor}`);
    }
}

// ENTRADA DE DADOS
let numero = Number(prompt(`Digite um valor: `));

// SAIDA
calcularValor(numero);
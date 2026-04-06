/* 1. Números quadrados perfeitos são aqueles cuja raiz quadrada é um
número inteiro. Exemplo 144. Fazer um algoritmo que dado um
número inteiro positivo, calcule e escreva se este é ou não quadrado
perfeito.
Obs.: Usuário ideal - ele não irá digitar valores incorretos. */

function calcularQuadradoPerfeito(numero){
    if(Math.sqrt(numero) % 1 === 0) return "O número " + numero + " é um quadrado perfeito.";
    else return "O número " + numero + " não é um quadrado perfeito.";
}

const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite um número inteiro de 3 dígitos: "));

const resultado = calcularQuadradoPerfeito(numero);

console.log(`${resultado}`);
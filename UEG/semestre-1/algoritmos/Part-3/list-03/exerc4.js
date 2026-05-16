/* Fazer um programa que leia um número inteiro positivo, calcule e
escreva o fatorial deste.
Exemplo: o fatorial de 5 é 5! = 5 * 4 * 3 * 2 * 1, o fatorial de zero é um
por definição, 0! = 1. */

const prompt = require("prompt-sync")();
// PROCESSAMENTO
function calcularFatorial(numero) {
    let fatorial = 1;
    for (let valor = 1; valor <= numero; valor++) {
        fatorial *= valor;
    }
    return fatorial;
}

// ENTRADA DE DADOS
let numero = Number(prompt(`Digite um valor: `));

// SAIDA
console.log(`O fatorial de ${numero} é ${calcularFatorial(numero)}.`);
/* Escrever um programa que leia um número de 3 dígitos e o
inverta, escrevendo o número lido e o invertido. */

function inverterNumero(valor){
    let numeroI = valor % 10;
    valor = Math.trunc (valor / 10);
    numeroI = numeroI * 10 + valor % 10;
    valor = Math.trunc (valor / 10);
    numeroI = numeroI * 10 * valor;
    return numeroI;
}

const prompt = require("prompt-sync")();
const numero = Number(prompt("Numero: "));
let auxiliar = numero;
let numeroInvertido = inverterNumero(auxiliar);

console.log(`Numero original ${numero}`);
console.log(`Numero invertido ${numeroInvertido}`);

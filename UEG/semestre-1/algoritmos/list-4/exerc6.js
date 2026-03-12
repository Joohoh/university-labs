/* Escrever um programa que leia um número de 3 dígitos e o
inverta, escrevendo o número lido e o invertido. */

function inverterNumeros(numero){
    const centenas = Math.floor(numero / 100); 
    const dezenas = Math.floor((numero % 100) / 10); 
    const unidades = numero % 10; 
    const numeroInvertido = (unidades * 100) + (dezenas * 10) + centenas;
    return numeroInvertido;
}

const prompt = require("prompt-sync")();
const num = parseInt(prompt("Digite um número inteiro de 3 dígitos: "));

const numInvertido = inverterNumeros(num);

console.log(`O número invertido é: ${numInvertido} e o número original era: ${num}`);

/* function inverterNumero(valor){
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
console.log(`Numero invertido`);
*/

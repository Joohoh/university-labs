/* Escrever um programa que leia um número de 3 dígitos e o
inverta, escrevendo o número lido e o invertido. */

const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite um número de 3 dígitos: "));

const centenas = Math.floor(numero / 100); // Math.floor é usado para arredondar para baixo, garantindo que obtenhamos apenas a parte inteira.  
const dezenas = Math.floor((numero % 100) / 10); // O operador % é usado para obter o resto da divisão, que nos dá os últimos dois dígitos do número. Em seguida, dividimos por 10 para obter a parte das dezenas.
const unidades = numero % 10; // O operador % é usado novamente para obter o último dígito do número, que representa as unidades.
const numeroInvertido = (unidades * 100) + (dezenas * 10) + centenas; 
// Para inverter o número, multiplicamos as unidades por 100, as dezenas por 10 e somamos tudo para obter o número invertido.

console.log(`O número lido é: ${numero} e o número invertido é: ${numeroInvertido}`);

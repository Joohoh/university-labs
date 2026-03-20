/* Fazer um programa para ler os valores dos coeficientes
coeficienteA, coeficienteB e coeficienteC de uma equação
quadrática. Calcular e imprimir o valor do discriminante (delta).
Delta = coeficienteB
2
- 4 * coeficienteA * coeficienteC. */

const prompt = require("prompt-sync")();

const coeficienteA = prompt("Digite um valor para 'A' ");
const coeficienteB = prompt("Digite um valor para 'B' ");
const coeficienteC = prompt("Digite um valor para 'C' ");

const delta = coeficienteA ** 2 - 4 * coeficienteB * coeficienteC;

console.log(`O resultado de delta é: ${delta}`);
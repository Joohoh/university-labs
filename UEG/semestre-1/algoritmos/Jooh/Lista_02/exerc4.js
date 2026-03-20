/* Com o usuário fornecendo a base e a altura de uma pirâmide,
fazer um programa que calcule e escreva o seu volume. 
VOLUME =1/3 * BASE * ALTURA */

const prompt = require("prompt-sync")();

const base = prompt("Digite o valor da base de uma pirâmide: ");
const altura = prompt("Digite o valor da altura de uma pirâmide: ");

const volume = (base * altura) / 3;

console.log(`O volume dessa pirâmide é: ${volume.toFixed(1)}`)

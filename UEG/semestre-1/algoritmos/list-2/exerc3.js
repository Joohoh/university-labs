/* Faça um programa que leia as 3 notas de um aluno e calcule
a média final deste. Considerar que a média é ponderada e
que o peso das notas é: 2,3 e 5, respectivamente. */

const prompt = require("prompt-sync")();

const nota1 = prompt("Digite a 1ª nota: ");
const nota2 = prompt("Digite a 2ª nota: ");
const nota3 = prompt("Digite a 3ª nota: ");

const peso = 2 + 3 + 5

const media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / peso;

console.log(`Sua média é: ${media.toFixed(1)}`);

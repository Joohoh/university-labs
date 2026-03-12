/* Faça um programa que leia as 3 notas de um aluno e calcule
a média final deste. Considerar que a média é ponderada e
que o peso das notas é: 2,3 e 5, respectivamente. */

function calcularMediaPonderada(nota1, nota2, nota3){
    const media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
    return media;
}

const prompt = require("prompt-sync")();
const nota1 = Number(prompt("Digite a primeira nota: "));
const nota2 = Number(prompt("Digite a segunda nota: "));
const nota3 = Number(prompt("Digite a terceira nota: "));

const mediaPonderada = calcularMediaPonderada(nota1, nota2, nota3);

console.log(`O valor da nota é: ${mediaPonderada}`);

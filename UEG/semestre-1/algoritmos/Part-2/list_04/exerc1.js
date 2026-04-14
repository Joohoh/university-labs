/* 1. Escrever um algoritmo que leia o número de identificação, as 3 notas
obtidas por um aluno nas 3 verificações e a nota média dos exercícios
que fazem parte da avaliação. Calcular a média de aproveitamento do
aluno, usando a fórmula:

Calcular o conceito obtido pelo aluno com base na tabela abaixo:

Média Final Conceito
9,1 à 10,0 A
7,6 à 9,0 B
6,1 à 7,5 C
4,1 à 6,0 D
< 4,0 E

O algoritmo deve escrever o número do aluno, suas notas, a média
dos exercícios, a média final, o conceito correspondente e a
mensagem: APROVADO se o conceito for A, B ou C e REPROVADO,
se o conceito for D ou E. */

function calcularMediaAproveitamento(n1, n2, n3, mediaExercicios) {

    const mediaFinal = ((n1 * 1) + (n2 * 2) + (n3 * 3) + mediaExercicios) / 7;

    if (mediaFinal >= 9.1 && mediaFinal <= 10) {
        return "Média final: " + mediaFinal.toFixed(2) + " | Conceito: A | APROVADO";
    } else if (mediaFinal >= 7.6 && mediaFinal <= 9) {
        return "Média final: " + mediaFinal.toFixed(2) + " | Conceito: B | APROVADO";
    } else if (mediaFinal >= 6.1 && mediaFinal <= 7.5) {
        return "Média final: " + mediaFinal.toFixed(2) + " | Conceito: C | APROVADO";
    } else if (mediaFinal >= 4.1 && mediaFinal <= 6) {
        return "Média final: " + mediaFinal.toFixed(2) + " | Conceito: D | REPROVADO";
    } else if (mediaFinal < 4) {
        return "Média final: " + mediaFinal.toFixed(2) + " | Conceito: E | REPROVADO";
    }

}

const prompt = require("prompt-sync")();

let opcao = "S";

do { 
    const numAluno = Number(prompt("Digite o número de identificação do aluno: "));
    const nota1 = Number(prompt("Digite a primeira nota: "));
    const nota2 = Number(prompt("Digite a segunda nota: "));
    const nota3 = Number(prompt("Digite a terceira nota: "));
    const mediaExercicios = Number(prompt("Digite a média dos exercícios: "));
    
    console.log(`Número do aluno: ${numAluno} | Notas: ${nota1}, ${nota2}, ${nota3} | Média dos exercícios: ${mediaExercicios}`);
    console.log(calcularMediaAproveitamento(nota1, nota2, nota3, mediaExercicios));
    
    opcao = prompt("Deseja continuar? [S/N]: ").toUpperCase();

} while (opcao === "S")
    if (opcao === "N") return console.log("Programa encerrado!");
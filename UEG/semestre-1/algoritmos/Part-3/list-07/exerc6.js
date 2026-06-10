/* 6. Fazer um programa para entrar com nome, nota da Prova1 e
nota da Prova2 de 15 alunos. Imprimir uma listagem,
contendo: nome, nota da Prova1, nota da Prova2 e a média
arredondada de cada aluno. Ao final, calcule e imprima a
média geral da turma.*/

//ENTRADA
const prompt = require("prompt-sync")();

//PROCESSAMENTO
function ImprimirNotas(){
    let mediaTotal = 0;
    let somaMediaTotal = 0;
    
    for(let contador = 1; contador <= 2; contador++){
        let mediaAluno = 0;
        let nome = prompt(`Digite o nome do aluno: `);
        let prova1 = Number(prompt(`Digite o valor da Prova 01: `));
        let prova2 = Number(prompt(`Digite o valor da Prova 02: `));
        mediaAluno = (prova1 + prova2) / 2;
        console.log(`| NOME ALUNO | NOTA P1 | NOTA P2 | MÉDIA | `)
        console.log(`  ${nome}     |    ${prova1}     |     ${prova2}     |   ${mediaAluno}`)
        somaMediaTotal += mediaAluno;
    }
    mediaTotal = somaMediaTotal / 2;
    console.log(`A média geral da turma é de ${mediaTotal}`);

}

//SAIDA
ImprimirNotas();

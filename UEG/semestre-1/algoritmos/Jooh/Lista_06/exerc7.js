/* Escrever um algoritmo que lê um valor em reais e calcule qual
o menor número possível de notas de 100, 50, 10, 5 e 1 em
que o valor lido pode ser decomposto. Escrever o valor lido e
a relação de notas necessárias. */

function calcularNotas(valor){
    let auxiliar = valor;
    let notas100 = Math.trunc(auxiliar / 100);
    auxiliar = auxiliar % 100;
    let notas50 = Math.trunc(auxiliar / 50);
    auxiliar = auxiliar % 50;
    let notas10 = Math.trunc(auxiliar / 10);
    auxiliar = auxiliar % 10;
    let notas5 = Math.trunc(auxiliar / 5);
    auxiliar = auxiliar % 5;
    let notas1 = Math.trunc(auxiliar / 1);
    
    console.log(`Valor lido: R$${valor.toFixed(2)}`);
    console.log(`Notas de 100: ${notas100}`);
    console.log(`Notas de 50: ${notas50}`);
    console.log(`Notas de 10: ${notas10}`);
    console.log(`Notas de 5: ${notas5}`);
    console.log(`Notas de 1: ${notas1}`);
        
}

const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite um valor em reais:"));
calcularNotas(valor);


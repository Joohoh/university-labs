/* Fazer um programa que calcule e escreva o valor de uma
prestação em atraso, utilizando a fórmula abaixo:

Valor atualizado da prestação = valor da prestação + (valor da
prestação * (taxa de juros/100) * tempo de atraso).

Onde:
valor da prestação = valor da prestação a ser paga;
taxa de juros = valor do juro cobrado pelo atraso;
tempo de atraso = quantidade de dias em atraso; */

const prompt = require("prompt-sync")();

const valorDaPrestacao = Number(prompt("Digite o valor da prestação a ser paga: R$ "));
const taxaDeJuros = Number(prompt("Digite a taxa de juros mensal: "));
const tempoDeAtraso = Number(prompt("Digite a quantidade de dias em atraso: "));

const valorAtualizadoDaPrestacao = valorDaPrestacao + (valorDaPrestacao * (taxaDeJuros/100) * tempoDeAtraso);
console.log(`O valor atualizado da prestação é de: R$ ${valorAtualizadoDaPrestacao.toFixed(2)}`);

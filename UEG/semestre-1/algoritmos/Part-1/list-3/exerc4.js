/* Fazer um programa que calcule e escreva o valor de uma
prestação em atraso, utilizando a fórmula abaixo:

Valor atualizado da prestação = valor da prestação + (valor da
prestação * (taxa de juros/100) * tempo de atraso).

Onde:
valor da prestação = valor da prestação a ser paga;
taxa de juros = valor do juro cobrado pelo atraso;
tempo de atraso = quantidade de dias em atraso; */

function calcularPrestacaoAtrasada(valorPrestacao, taxaJuros, tempoAtraso){
    const resultado = valorPrestacao + (valorPrestacao * (taxaJurosDecimal / 100) * tempoAtraso);
    return resultado;
}

const prompt = require("prompt-sync")();
const valPrestacao = Number(prompt("Digite o valor da prestação atual: R$ "));
const txJuros = Number(prompt("Digite o valor da taxa de juros: "));
const tempAtraso = Number(prompt("Digite o tempo de atraso: "));

const valorFinalPrestacao = calcularPrestacaoAtrasada(valPrestacao, txJuros, tempAtraso);

console.log(`O valor da parcela atualizada é de: R$ ${valorFinalPrestacao}`);

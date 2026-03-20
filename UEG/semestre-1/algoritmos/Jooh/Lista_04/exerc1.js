/* 1. Fazer um programa que calcule a perda de carga em
tubulações através da formula de Hanzen-Willians
apresentada abaixo:
J = (Q^1.85) * 10.643 * (D^4.87) * (C^-1.85)

Onde:

J = perda de carga;
Q = vazão;
D = diametro do tubo;
C = coeficiente de rugosidade.

Dados entrados via teclado. */

const prompt = require("prompt-sync")();

const vazao = Number(prompt("Digite o valor de vazão: "));
const diametroDoTubo = Number(prompt("Digite o diâmetro do tubo: "));
const coeficienteDeRugosidade = Number(prompt("Digite o coeficiente de rugosidade: "));

const perdaDeCarga = (vazao ** 1.85) * 10.643 * (diametroDoTubo ** -4.87) * (coeficienteDeRugosidade ** -1.85);

console.log(`A perda de carga é: ${perdaDeCarga.toFixed(5)}`);
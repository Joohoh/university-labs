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

function calcularPerdaCarga(vazao, diametroTubo, coeficienteRugosidade){
    const resultado = (vazao ** 1.85) * 10.643 * (diametroTubo ** 4.87) * (coeficienteRugosidade ** -1.85);
    return resultado; 
}

const prompt = require("prompt-sync")();

const vazao = Number(prompt("Digite o valor da vazão: "));
const diametroTubo = Number(prompt("Digite o valor do diâmetro do tubo: "));
const coedicienteRugosidade = Number(prompt("Digite o coeficiente de rugosisade: "));

const perdaCarga = calcularPerdaCarga(vazao, diametroTubo, coedicienteRugosidade);

console.log(`A perda de carga é de: ${perdaCarga.toFixed(2)}`);

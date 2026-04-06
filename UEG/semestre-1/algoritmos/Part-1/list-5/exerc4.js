/* Teorema de Pitágoras: H^2 = L1^2 + L2^2. Tem uma infinidade de
números com essa combinação. Dado dois números inteiros
positivos, M e N, onde M é maior do que N, desenvolver um
algoritmo para entrar com dois números positivos e fornecer
os valores, dos lados e hipotenusa do triângulo gerados
combinando M e N. Onde: L1 = M**2 - N**2, L2 = 2 * M * N, Hipotenusa = M**2 + N**2. */

function calcularPitagoras(M, N){
    const L1 = M ** 2 - N ** 2;
    const L2 = 2 * M * N;
    const hipotenusa = M ** 2 + N ** 2;
    console.log(`O valor do lado 1 é de: ${L1} do lado 2 é de: ${L2} e o valor da hipotenusa é de: ${hipotenusa}`);
}

const prompt = require("prompt-sync")();

const M = parseInt(prompt("Digite o valor de M (maior do que N): "));
const N = parseInt(prompt("Digite o valor de N: "));

calcularPitagoras(M, N);


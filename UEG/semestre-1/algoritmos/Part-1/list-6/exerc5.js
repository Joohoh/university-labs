/* Fazer um algoritmo que dados os 4 elementos de uma matriz
2x2, calcule e escreva o valor do determinante desta matriz. 
DETERMINANTE = |a11 a12|
              |a21 a22| = (a11 * a22) - (a21 * a12) */

function calcularDeterminante(a11, a12, a21, a22) {
    const resultado = (a11 * a22) - (a21 * a12);
    return resultado;
}

const prompt = require("prompt-sync")();

const a11 = Number(prompt("Digite o valor de a11:"));
const a12 = Number(prompt("Digite o valor de a12:"));
const a21 = Number(prompt("Digite o valor de a21:"));
const a22 = Number(prompt("Digite o valor de a22:"));

const determinante = calcularDeterminante(a11, a12, a21, a22);

console.log(`O valor do determinante da matriz é: ${determinante}`);
/* Fazer um algoritmo que:
● Leia dois números inteiros positivos (N1, N2);
● Calcule e escreva para este par de números (N1, N2), o mínimo
múltiplo comum. */

const prompt = require("prompt-sync")();

const numero1 = Number(prompt("Digite um valor para N1: "));
const numero2 = Number(prompt("Digite um valor para N2: "));

function calcularMaximoDivisorComum(n1, n2) {
    
    while (n2 !== 0) {
        let resto = n1 % n2;
        n1 = n2; 
        n2 = resto; 
    }

    return n1;
}

function calcularMinimoMultiploComum(n1, n2) {
    if (n1 === 0 || n2 === 0) return 0;

    else return Math.abs(n1 * n2) / calcularMaximoDivisorComum(n1, n2);
}

console.log(`O MMC de ${numero1} e ${numero2} é: ${calcularMinimoMultiploComum(numero1, numero2)}`);
